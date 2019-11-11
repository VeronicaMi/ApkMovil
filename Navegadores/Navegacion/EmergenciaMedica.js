import React, {Component} from 'react';
import {
    StyleSheet, View, Text, Alert,
    Picker, TextInput, AsyncStorage, NativeEventEmitter
} from 'react-native';

import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Chat from './Chat.js';
import * as Meteor from "react-native-meteor";
import JavaTwilio from './TwilioServ';
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

class EmergenciaMedicaView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otraEmergencia: '',
            MedicalEmer: '10104',
            userId: '',
            location: '',
            hasLocationPermissions: false
        };
    };

    async componentDidMount() {
        await this._getLocationAsync();
        const itemUsuario = await AsyncStorage.getItem('myuser');
        const myuser = JSON.parse(itemUsuario);
        if (myuser) {
           this.setState({userId: myuser.userId})
        }
        const eventEmitter = new NativeEventEmitter(JavaTwilio);
        eventEmitter.addListener('participantConnected', (event) => {
            console.log(event) // "someValue"
        });
        eventEmitter.addListener('messageReceived', (event) => {
            console.log(event) // "someValue"
        });
    };

    updateMedicalEmer = (MedicalEmer) => {
        this.setState({MedicalEmer})
    };

    sayHiFromJava() {
        JavaTwilio.sayHi( (err) => {console.log(err)}, (msg) => {console.log(msg)} );
    }

    requestAssistance() {
        // 1. Se construye el JSON con la petición:
        const report =  {
            userId: this.state.userId,
            idIncidente: this.state.MedicalEmer,
            tipoReporte: 'chat',
            ubicacion: this.state.location
        };
        console.log('reporte a enviar: ', report);
        // 2. Solicita la creación de un room
        Meteor.call('room.request', report, async (error, response) => {
            if (error) {
                alert(error.error);
            } else if (response.status) {
                console.log(response);
                let stateName = await JavaTwilio.connectToRoom(response.roomName, response.token);
                console.log('respuesta a connect: ', stateName);
                if (stateName) {
                    this.props.navigation.navigate('Chat');
                }
            } else {
                alert(response);
            }
        });
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            locationResult: JSON.stringify(location),
            location: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Tipo de emergencia</Text>
                <Picker
                    style={styles.tipoEmergencia}
                    selectedValue={this.state.MedicalEmer} onValueChange={this.updateMedicalEmer}>
                    <Picker.Item label='Accidente de coche con heridos' value='10104'/>
                    <Picker.Item label='Electrocutado' value='10309'/>
                    <Picker.Item label='Infarto' value='10304'/>
                    <Picker.Item label='Sobredosis' value='10324'/>
                    <Picker.Item label='Trabajo de parto' value='10325'/>
                    <Picker.Item label='Ahogado' value='10301'/>
                </Picker>
                <Text style={styles.label}>Otro</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Especifique'
                    onChangeText={(text) => this.setState({otraEmergencia: text})}
                    value={this.state.otraEmergencia}
                />
                <OpcionEmergencia
                    //onPressChat={() => this.props.navigation.navigate('Chat')}
                    onPressChat={this.requestAssistance.bind(this)}
                />
            </View>
        );
    }
}


const EmergenciaMedica = createStackNavigator({
        EmergenciaMedicaView: EmergenciaMedicaView,
        Chat: Chat,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

export default EmergenciaMedica;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    label: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 20,
    },

    tipoEmergencia: {

        marginLeft: 36,
        fontSize: 18,

    },

    input: {
        margin: 5,
        marginLeft: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#803c3f',
        width: 310,
    },
});