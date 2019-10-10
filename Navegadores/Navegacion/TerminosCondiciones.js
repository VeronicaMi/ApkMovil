import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class TerminosCondiciones extends Component{
    static navigationOptions = {
        title: 'Términos y Condiciones'
    }

    render(){
        return(
            <View style = {styles.container}>
                 <Text style = {styles.texto}>
                     Aqui van los terminos y condiciones 
                 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    texto:{
        flex: 1,
        fontSize: 30,
    },

});
