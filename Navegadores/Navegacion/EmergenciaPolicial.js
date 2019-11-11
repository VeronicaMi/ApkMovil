import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, 
    Picker, TextInput } from 'react-native';
import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Meteor from "react-native-meteor";
import Chat from './Chat.js';

class EmergenciaPolicialView extends Component{ 
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {
            emergencia: '',
            PolicialEmer: '',
            emergencias: []
        };
    };
    componentDidMount() {
        Meteor.call('get.incidentebyIdTipo',  "2" , async (err, res) => {

            if(err) {
                Alert.alert(
                            'Error',
                            err.message,
                            [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            {cancelable: false},
                            );
            } else if(res){
                console.log(res)
                this.setState({
                    ...this.state,
                    emergencias: res
                });
            }
        });
    }
    updatePolicialEmer = (PolicialEmer) => {
        this.setState({
            ...this.state,
            PolicialEmer: PolicialEmer
        })
    }
    render(){
        const itemsEmergencias = this.state.emergencias.map(function (emergencia,index){
            const {id_final, incidente} = emergencia;

            return (
                <Picker.Item
                key={index}
                label = {incidente}
                value = {id_final}/>
            );
        });

        return(
            <View style = {styles.container}>

            <Text style = {styles.label}>Tipo de emergencia</Text>

                    <Picker 
                            style = {styles.tipoEmergencia}
                            selectedValue = {this.state.PolicialEmer} 
                            onValueChange = {(el)=>this.updatePolicialEmer(el)}>
                            {itemsEmergencias}
                    </Picker>
                    
                <OpcionEmergencia
                    onPressChat={() => 
                        this.props.navigation.navigate('Chat', {
                            id_final: this.state.PolicialEmer
                        })}
                />
            </View>
        );
    }
};

const EmergenciaPolicial = createStackNavigator({
    EmergenciaPolicialView:EmergenciaPolicialView, 
    Chat: Chat,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   });

export default EmergenciaPolicial;

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