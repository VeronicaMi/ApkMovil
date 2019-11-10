//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Alert, 
        Picker, TextInput } from 'react-native';
// import all basic components
//npm install --save react-native-phone-call

import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Chat from './Chat.js';


class EmergenciaMedicaView extends Component {
    state = {MedicalEmer: '' }
    updateMedicalEmer = (MedicalEmer) => {
        this.setState({MedicalEmer: MedicalEmer})
    }

    constructor(props){
        super(props);
        this.state = {
            emergencia: '',
        };
    };

   render(){
        return(
            <View style = {styles.container}>
                
                <Text style = {styles.label}>Tipo de emergencia</Text>

                <Picker 
                            style = {styles.tipoEmergencia}
                            selectedValue = {this.state.MedicalEmer} onValueChange = {this.updateMedicalEmer}>
                            <Picker.Item label = 'Accidente de coche con heridos' value = 'accidenteCoche'/>
                            <Picker.Item label = 'Electrocutado' value = 'electrocutado'/>
                            <Picker.Item label = 'Infarto' value = 'infarto'/>
                            <Picker.Item label = 'Sobredosis' value = 'sobredosis'/>
                            <Picker.Item label = 'Trabajo de parto' value = 'parto'/>
                            <Picker.Item label = 'Ahogado' value = 'ahogado'/>
                    </Picker>

                    <Text style = {styles.label}>Otro</Text>

                    <TextInput
                                style = {styles.input}
                                placeholder = 'Especifique'
                                onChangeText = {(text) => this.setState({emergencia: text})}
                                value = {this.state.emergencia}
                            />

                <OpcionEmergencia
                    onPressChat={() => this.props.navigation.navigate('Chat')}
                />
                
            </View>
        );
    }
};


const EmergenciaMedica = createStackNavigator({
    EmergenciaMedicaView:EmergenciaMedicaView, 
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
    container:{
        flex: 1,
    },

    label:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 20,
    },

    tipoEmergencia:{
        
        marginLeft: 36,
        fontSize: 18,
        
    },

    input:{
        margin:5,
        marginLeft: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#803c3f',
        width: 310,
    },
});