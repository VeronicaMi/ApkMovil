//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Alert, 
        Picker, TextInput } from 'react-native';
// import all basic components
//npm install --save react-native-phone-call

import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Meteor from "react-native-meteor";
import Chat from './Chat.js';


class EmergenciaMedicaView extends Component {

    constructor(props){
        super(props);
        this.state = {
            emergencias: [],
            MedicalEmer: ''
        };
    };
    
    updateMedicalEmer = (MedicalEmer) => {
        this.setState({MedicalEmer: MedicalEmer})
    }

    componentDidMount() {
        Meteor.call('get.incidentebyIdTipo',  "1" , async (err, res) => {

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
                selectedValue = {this.state.MedicalEmer} 
                onValueChange = {(el)=>this.updateMedicalEmer(el)}>
                    {itemsEmergencias}
                </Picker>

                <OpcionEmergencia
                    onPressChat={() => 
                        this.props.navigation.navigate('Chat', {
                            id_final: this.state.MedicalEmer
                        })}
                />
                
            </View>
        );
    }
};

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