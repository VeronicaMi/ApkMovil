import React, { Component } from 'react';
import {TextInput, View, Button, AsyncStorage} from 'react-native';
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

    enviar() {
        Meteor.call('users.validate.phoneNumber', '5570073986', this.state.code, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                console.log(resp);
                resp
                    ? this.setState({msg: 'Verificación exitosa, ahora puede acceder a su cuenta.'})
                    : this.setState({msg: 'No se pudo verificar su número'});
            }
        });
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={this.onChangeText.bind(this)}>
                </TextInput>
                <Button
                    title={'Enviar'}
                    onPress={this.enviar.bind(this)}/>
            </View>
        );
    }
}