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
        if(this.state.telefono == ''){
            this.setState({
                ...this.state,
                sended: false
            })
            Alert.alert('Debes ingresar un número')
        }
        else
        {this.envioCodigo();}
            
    }

    envioCodigo() {
        Meteor.call('users.requestAccessByPhone',  this.state.telefono , async (err, res) => {
            if(err){
                this.setState({
                    ...this.state, sended: false
                })
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
                await this.setInfoUsuario(res);
                this.props.navigation.navigate('DrawerNav');                
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
                        style = {{margin:10, marginLeft: 40, borderBottomWidth: 2, borderBottomColor: '#803c3f',
                                    width: 280, fontSize: 22, marginTop: 50}}
                        placeholder = "Número teléfono"
                        keyboardType = 'numeric'
                        maxLength={10}
                        onChangeText = { (text) => this.setState({
                                ...this.state,
                                telefono : text
                            }) 
                        }
                        value = {this.state.telefono} />
                    <View >
                        <TouchableOpacity 
                        style = {{justifyContent: 'center', alignItems: 'center', flex: 1, marginRight: 50, marginLeft: 50, marginTop: 10, alignItems: 'center',
                        borderColor: '#803c3f', borderBottomWidth: 15, borderTopWidth: 15, backgroundColor: '#803c3f',}}
                        onPress={()=> this.solicitarCodigoValidacion()}>
                            <Text style = {{fontSize: 20, color: '#ffffff'}}> Verificar número telefónico</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else {
            component = (
                <View >
                    <TextInput 
                        style = {{margin:10, marginLeft: 40, borderBottomWidth: 2, borderBottomColor: '#803c3f',
                                    width: 280, fontSize: 22, marginTop: 50}}
                        placeholder = "Código"
                        keyboardType = 'numeric'
                        maxLength={4}
                        onChangeText = { (text) => this.setState({...this.state, codigo:text}) }
                        value = {this.state.codigo} />
                    <View>
                        <TouchableOpacity 
                            style = {{flex: 1, marginRight: 50, marginLeft: 50, marginTop: 10, alignItems: 'center',
                            borderColor: '#803c3f', borderBottomWidth: 15, borderTopWidth: 15, backgroundColor: '#803c3f',justifyContent: 'center', alignItems: 'center'}}
                            onPress = {()=>this.validarCodigoVerificacion()}>
                            <Text style = {{fontSize: 20, color: '#ffffff'}}> Verficar código</Text>
                        </TouchableOpacity>
                    </View>
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

