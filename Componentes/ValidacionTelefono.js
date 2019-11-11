import React, { Component } from 'react';
import {TextInput, View, Button, AsyncStorage, Alert,
           StyleSheet, Text } from 'react-native';
import Meteor from 'react-native-meteor';

export default class ValidacionTelefono extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: 0,
            msg: ''
        }
    }

    onChangeText(code) {
        console.log(this.state);
        // await AsyncStorage.setItem('myuser', JSON.stringify(this.state.usuario));
        if (code.length === 4) {
            this.setState({code: parseInt(code, 10)});
        }
    }


    async enviar() {
        const itemUsuario = await AsyncStorage.getItem('myuser');
        const myuser = JSON.parse(itemUsuario);
        Meteor.call('users.validate.phoneNumber', myuser.numeroTelefono, this.state.code, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                console.log(resp);
                if(!!resp) {
                    this.successCallback('Verificación exitosa, ahora puede acceder a su cuenta.')
                } else{
                    this.setState({msg: 'No se pudo verificar su número'});
                }
            }
        });
    }
    
    successCallback(msg) {

        Alert.alert(
            'Exito',
            msg,
            [
                {text: 'OK', onPress: () => this.props.navigation.navigate('DrawerNav')},
            ],
            {cancelable: false},
    );
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.titulo}> Código de verificación </Text>
                <TextInput 
                style = {styles.input}
                keyboardType = 'numeric'
                maxLength={4}
                onChangeText={this.onChangeText.bind(this)}>
                </TextInput>
                <Button
                    title={'Enviar'}
                    onPress={this.enviar.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    titulo:{
        fontSize: 28,
        justifyContent: 'center',
        paddingLeft: 15,
        margin: 5,
    },

    input:{
        margin:15,
        marginLeft: 40,
        justifyContent: 'center',
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#803c3f',
        width: 200,
    },

});