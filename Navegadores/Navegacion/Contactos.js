import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, 
        TextInput, TouchableOpacity, Image } from 'react-native';

export default class Contactos extends Component {
    constructor(props){
        super(props);
        this.state = {
            Nombre: '',
            Telefono: '',
        };
    };

    
   
    render(){
        let display = this.state.Nombre;
        return(
            <ScrollView>
                <View style = {styles.container}>
                        <Text style = {styles.label}> Nombre  </Text>
                            <TextInput
                                style = {styles.input}
                                placeholder = 'Alberto'
                                onChangeText = {(text) => this.setState({Nombre: text})}
                                value = {this.state.Nombre}
                            />

                        <Text style = {styles.label}> Telefono </Text>
                            <TextInput
                                style = {styles.input}
                                placeholder = '55 98 98 98 98'
                                keyboardType = 'numeric'
                                onChangeText = {(text) => this.setState({Telefono: text})}
                                value = {this.state.Telefono}
                            />

                        <TouchableOpacity>
                            <Image
                                style = {styles.imagePlus}
                                source = {{uri: 'https://i.postimg.cc/SxkSMdQM/Anadir.png'}}
                            />
                            <Text style = {styles.textPlus}>Añadir contacto</Text>
                        </TouchableOpacity>

                        <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => alert('hola')}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        );
    }
 };
 

 const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    titulo:{
        fontSize: 28,
        justifyContent: 'center',
        paddingLeft: 30,
        
    },

    label:{
        marginTop: 25,
        fontSize: 18,
        paddingLeft: 20,
    },

    input:{
        margin:5,
        marginLeft: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#803c3f',
        width: 310,
    },
    
    imagePlus:{
        marginTop: 30,
        margin: 50,
        marginLeft: 65,
        height: 30,
        width: 30,
    },

    textPlus:{
        marginLeft: 40,
        marginTop: -40,
        fontSize: 12,
    },

    button:{
        flex: 1,
        marginTop: 40,
        marginRight: 100,
        marginLeft: 100,
        alignItems: 'center',
        borderColor: '#803c3f',
        borderBottomWidth: 5,
        borderTopWidth: 5,
        backgroundColor: '#803c3f',
    },

    buttonStyle:{
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    buttonText:{
        color: '#ffffff',
        fontSize: 24,
    },
});