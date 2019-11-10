import React, { Component } from 'react';
<<<<<<< HEAD
import { Alert, AsyncStorage, StyleSheet, View, Text, ScrollView, 
        TextInput, TouchableOpacity, Image } from 'react-native';
import  Conexion,{connect}  from '../../Componentes/Conexion.js';
=======
import { Alert, AsyncStorage, StyleSheet, View, Text, ScrollView,
        TextInput, TouchableOpacity, Image } from 'react-native';
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d
import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";

<<<<<<< HEAD
import { Feather } from '@expo/vector-icons';

connect();

=======
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d
class Contactos extends Component {
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD
            idContact: undefined,
=======
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d
            nombre: '',
            telefono: '',
        };
        console.log(props.contatos);
    };

    async componentDidMount() {
      const itemUsuario = await AsyncStorage.getItem('myuser');
      const myuser = JSON.parse(itemUsuario);
<<<<<<< HEAD
=======
      console.log(myuser);
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d
      this.setState({
        ...this.state,
        userId: myuser.userId
      });
<<<<<<< HEAD
    }  
=======
    }
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d

    registrarContacto = async () => {
      const nombre = this.state.nombre;
      const telefono = this.state.telefono;
<<<<<<< HEAD
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
=======
      const contact = {
                     nombreCompleto: nombre,
                     numeroTelefonico: telefono,
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
            }
            console.log('contact.save', err, res);
        });

        //
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d
    }
   
    render(){
        const {ready, contactos} = this.props;
        const editContacto = this.editContacto;
        let listContacts = undefined;
        if(!!ready) {
            listContacts = contactos.map(function (contacto,index){
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
        }
        let display = this.state.Nombre;
        return(
            <ScrollView>
                <View style = {styles.container}>
<<<<<<< HEAD
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
=======
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

                        <TouchableOpacity>
                            <Image
                                style = {styles.imagePlus}
                                source = {{uri: 'https://i.postimg.cc/SxkSMdQM/Anadir.png'}}
                            />
                            <Text style = {styles.textPlus}>Añadir contacto</Text>
                        </TouchableOpacity>
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d

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
 
<<<<<<< HEAD
export default withTracker( params => {
    const handle = Meteor.subscribe('contactsPublication', params.screenProps.idUser);

    return {
        ready: handle.ready(),
        contactos: handle.ready()?Meteor.collection('contacts').find({}):[]
    };
})(Contactos);
=======
export default withTracker(params => {
    Meteor.subscribe('contactsPublication', '3o9LXnTaZSRYi2YLB');

    return {
      contatos: Meteor.collection('contacts').find()
    };
  })(Contactos);
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d

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