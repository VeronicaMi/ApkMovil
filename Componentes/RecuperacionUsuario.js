import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";

  export default class RecuperacionUsuario extends Component{

    constructor(props){
        super(props);
        this.state = {
            sended: false,
            telefono: '',
            codigo: ''
        };
    }
    solicitarCodigoValidacion() {
        this.setState({
            ...this.state,
            sended: true
        });
        this.envioCodigo();
    }
    envioCodigo() {
        Meteor.call('users.requestAccessByPhone',  this.state.telefono , async (err, res) => {
            if(err){
                Alert.alert(
                            'Error',
                            err.message,
                            [
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            {cancelable: false},
                            );
            }else if(res) {
            }
            console.log('users.insert', err, res);
        });
    }
    validarCodigoVerificacion() {
        
        Meteor.call('users.loginByPhone',  this.state.telefono , parseInt(this.state.codigo), async (err, res) => {
            if(err){
            }else if(res) {
                this.props.navigation.navigate('DrawerNav');
                await this.setInfoUsuario(res);
            }
            console.log('users.insert', err, res);
        });
    }

      
    async setInfoUsuario(response) {
        /**
         *  aqui enviariamos el usuario existente de el response de mateor
         */
        console.log(response);
        const {profile, email, password, _id} = response;
        this.setState({ 
            usuario: {
                ...this.state.usuario, 
                ...profile,
                userId: _id,
                email,
                password
            }
        });
        console.log(this.state.usuario);
        await AsyncStorage.setItem('myuser', JSON.stringify(this.state.usuario));

    }

    render (){
        let component;

        if(!this.state.sended) {
            component = (
                <View>
                    <TextInput 
                    placeholder = "Número teléfono"
                    onChangeText = { (text) => this.setState({
                            ...this.state,
                            telefono : text
                        }) 
                    }
                    value = {this.state.telefono} />

                    <TouchableOpacity onPress={()=> this.solicitarCodigoValidacion()}>
                        <Text> Verificar número telefonico</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            component = (
                <View>
                    <TextInput 
                    placeholder = "Código"
                    onChangeText = { (text) => this.setState({...this.state, codigo:text}) }
                    value = {this.state.codigo} />
                    <TouchableOpacity onPress = {()=>this.validarCodigoVerificacion()}>
                        <Text> Verficar código</Text>
                    </TouchableOpacity>
                </View>
            );

        }

        return(
            <View>
                {component}
            </View>
        )
    }
  }

