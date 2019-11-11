//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Alert, 
    Picker, TextInput } from 'react-native';
// import all basic components
import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Meteor from "react-native-meteor";
import Chat from './Chat.js';

class EmergenciaProteccionCivilView extends Component{
    constructor(props){
        super(props);
        this.state = {
            emergencia: '',
            ProtecCivilEmer: '',
            emergencias: []
        };
    };
    componentDidMount() {
        Meteor.call('get.incidentebyIdTipo',  "3" , async (err, res) => {

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
    updateProtecCivilEmer = (ProtecCivilEmer) => {
        this.setState({
            ...this.state,
            ProtecCivilEmer: ProtecCivilEmer
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
                        selectedValue = {this.state.ProtecCivilEmer} 
                        onValueChange = {(el)=>this.updateProtecCivilEmer(el)}>
                        {itemsEmergencias}
                </Picker>
                
                <OpcionEmergencia
                    onPressChat={() => 
                        this.props.navigation.navigate('Chat', {
                            id_final: this.state.emergencia
                        })}
                />
            </View>
        );
    }
};

const EmergenciaProteccionCivil = createStackNavigator({
    EmergenciaProteccionCivilView:EmergenciaProteccionCivilView, 
    Chat: Chat,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   });

export default EmergenciaProteccionCivil;

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