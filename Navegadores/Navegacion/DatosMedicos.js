import React, {Component} from 'react';
import {
    Alert,
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';
import Meteor, {
    Tracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";
//import Encabezado from '../Secciones/Encabezado.js'
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';


var DonanteOrganos = [
    {label: 'Si', value: 0 },
    {label: 'No', value: 1 }
  ];

export default class DatosMedicos extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            grupoSanguineo: '',
            alergias: '',
            enfermedadCronica: '',
            padecimiento: '',
            suministroMedico: '',
            peso: '',
            talla: '',
        };
    };
    async componentDidMount() {
        const itemUsuario = await AsyncStorage.getItem('myuser');
        const myuser = JSON.parse(itemUsuario);
        this.consultaDatosMedicos(myuser.fichaMedica);
        this.setState({
          ...this.state,
          userId: myuser.userId,
        });
      } 
  
    consultaDatosMedicos(fichaMedica){
        const handle = Meteor.subscribe('medicalRecordPublication', fichaMedica );
        this.contactsTracker = Tracker.autorun(() => {
            if (handle.ready()) {
                const fichaMedicas = Meteor.collection('medical_records').find({});
                const fichaMedica = fichaMedicas[0];
                console.log('fichaMedicas',fichaMedicas);
                this.setState({
                  ...this.state,
                  ...fichaMedica,
                  peso: (fichaMedica.peso||0) + "",
                  talla: (fichaMedica.talla||0) + ""
                });
            }
        });
    }

    guardarFichaMedica(){
        const data = {
            ...this.state,
            peso: parseInt(this.state.peso),
            talla: parseInt(this.state.talla),
        };
        console.log(data);

        Meteor.call('medical.save',  data , async (err, res) => {

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
                            'Guardado correctamente',
                            [
                            {text: 'OK', onPress: () => {} },
                            ],
                            {cancelable: false},
                    );
            }
            console.log('contact.save', err, res);
          });
    }
   
    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Text style = {styles.label}> Grupo Sanguíneo </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'O +'
                            onChangeText = {(text) => this.setState({
                                ...this.state,
                                grupoSanguineo: text
                            })}
                            value = {this.state.grupoSanguineo}
                        />

                    <Text style = {styles.label}> Alergias </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Penicilina'
                            onChangeText = {(text) => this.setState({
                                ...this.state,
                                alergias: text
                            })}
                            value = {this.state.alergias}
                        />

                    <Text style = {styles.label}> Enfermedad Crónica </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Diabetes'
                            onChangeText = {(text) => this.setState({
                                ...this.state,
                                enfermedadCronica: text
                            })}
                            value = {this.state.enfermedadCronica}
                        />

                    <Text style = {styles.label}> Padecimientos </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'No se'
                            onChangeText = {(text) => this.setState({
                                ...this.state,
                                padecimiento: text
                            })}
                            value = {this.state.padecimiento}
                        />

                    <Text style = {styles.label}> Suministro de Medicamentos </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Niinguno'
                            onChangeText = {(text) => this.setState({
                                ...this.state,
                                suministroMedico: text
                            })}
                            value = {this.state.suministroMedico}
                        />

                    <Text style = {styles.label}> Peso </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '50' 
                            keyboardType = 'numeric'
                            onChangeText = {(text) => this.setState({
                                ...this.state,
                                peso: text
                            })}
                            value = {this.state.peso}
                        />

                    <Text style = {styles.label}> Talla </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '150'
                            keyboardType = 'numeric'
                            onChangeText = {(text) => this.setState({
                                ...this.state,
                                talla: text
                            })}
                            value = {this.state.talla}
                        />

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => this.guardarFichaMedica()}>
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
        margin: 5,
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

    donante:{
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-evenly'
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