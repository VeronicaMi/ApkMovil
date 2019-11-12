import React, { Component } from 'react';
import { Alert, AsyncStorage, StyleSheet, View, Text, ScrollView, 
        TextInput, TouchableOpacity, Image } from 'react-native';
import Meteor, {
    withTracker,
    Tracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";
  import { Feather } from '@expo/vector-icons';
  
  export default class Contactos extends Component {
    constructor(props){
        super(props);
        this.state = {
            idContact: undefined,
            nombre: '',
            telefono: '',
            contactos: []
        };
    };

    async componentDidMount() {
      const itemUsuario = await AsyncStorage.getItem('myuser');
      const myuser = JSON.parse(itemUsuario);
      this.buscarContatos(myuser.userId);
      this.setState({
        ...this.state,
        userId: myuser.userId,
      });
    } 

    buscarContatos(userId){
        const handle = Meteor.subscribe('contactsPublication', userId);
        this.contactsTracker = Tracker.autorun(() => {
            if (handle.ready()) {
                const contacts = Meteor.collection('contacts').find({});
                console.log('userId',userId);
                console.log('contacts',contacts);
                this.setState({
                  ...this.state,
                  contactos: contacts,
                });
            }
        });
    }

    registrarContacto = async () => {
      const nombre = this.state.nombre;
      const telefono = this.state.telefono;
      const idContact = this.state.idContact;
      const contact = {
                     nombreCompleto: nombre,
                     numeroTelefonico: telefono,
                     _id: idContact
                   };
      const userId = this.state.userId;
      
      
      Meteor.call('contact.save',  {contact, userId} , async (err, res) => {

        // Do whatever you want with the response
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
            Alert.alert(
                        'Exito',
                        'Se agrego correctamente',
                        [
                        {text: 'OK', onPress: () => {} },
                        ],
                        {cancelable: false},
                );
                        
            this.setState({
                nombre: '',
                telefono: '',
                idContact: undefined,
            });
            this.buscarContatos(userId);
        }
        console.log('contact.save', err, res);
      });
    } 


    editContacto = (contact) => {
      const {nombreCompleto, numeroTelefonico, _id} = contact;
      this.setState({
        nombre: nombreCompleto,
        telefono: numeroTelefonico,
        idContact: _id,
      });
    }
   
    render(){
        const editContacto = this.editContacto;        
        const listContacts = this.state.contactos.map(function (contacto,index){
            const {nombreCompleto, numeroTelefonico} = contacto;

            return (
            <View key={index}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.label}>{nombreCompleto}</Text>
                    <Text style={styles.label}>{numeroTelefonico}</Text>
                    <TouchableOpacity onPress={() => editContacto(contacto)}>
                    <Feather style={styles.label} name="edit" size = {32} color = "#497580" />
                    </TouchableOpacity>
                </View>
            </View>
            );
            });
        let display = this.state.Nombre;
        return(
            <ScrollView>
                <View style = {styles.container}>
                        <Text style = {styles.label}> Nombre  </Text>
                            <TextInput
                                style = {styles.input}
                                placeholder = 'Alberto'
                                onChangeText = {(text) => this.setState({
                                    ...this.state,
                                    nombre: text
                                })}
                                value = {this.state.nombre}
                            />

                        <Text style = {styles.label}> Telefono </Text>
                            <TextInput
                                style = {styles.input}
                                placeholder = '55 98 98 98 98'
                                keyboardType = 'numeric'
                                onChangeText = {(text) => this.setState({
                                    ...this.state,
                                    telefono: text
                                })}
                                value = {this.state.telefono}
                            />

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => this.registrarContacto()}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
                        </TouchableOpacity>
                    </View>
                    {listContacts}
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