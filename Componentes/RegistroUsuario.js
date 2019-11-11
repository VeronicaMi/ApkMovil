import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
//npm i react-native-check-box --save
//npm install react-native-datepicker --save
import DatePicker from 'react-native-datepicker';
//install npm i react-native-simple-radio-button --save
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';
import Encabezado from './Encabezado.js';
import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";

var Sexo = [
    {label: 'Femenino', value: 0 },
    {label: 'Masculino', value: 1 }
  ];

class RegistroUsuario extends Component{
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.state = {
            usuario:{
                numeroTelefono: '', 
                compania: '',
                nombre: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                correoElectronico: '',
                fechaNacimento: new Date(),
                sexo: '',
                calle: '',
                noExterior: '',
                noInterior: '',
                colonia: '',
                codigoPostal: '',
                role: 'mobile-app-user',
                password: '1234',
                //verificationCode: '0',
            },
           
            confirCorreo: '',
            check: false,
        };
    };

    updateCompania = (compania) => {
        const usuario = this.state.usuario;
        usuario.compania = compania;
        this.setState({...this.state, usuario});
    }

    checkBoxTest(){
        this.setState({
            check: !this.state.check
        })
    }


    guardarUsuarioNuevo = () => {
        // Do whatever you want with the response
        if(this.state.usuario.correoElectronico === this.state.confirCorreo){
            if(this.state.check){
                this.verificarUsuarioNuevo((exist)=>{
                    if(!exist) {
                        this.guardarUsuarioNuevoMetior();
                    }
                });
            }else{
                Alert.alert("Debes aceptar Terminos y Condiciones");
            }
        }else{
            Alert.alert("Tu correo no coincide");
        }

        // 
    }

    verificarUsuarioNuevo(callback){
        Meteor.call('users.requestAccessByPhone',  this.state.usuario.numeroTelefono , async (err, res) => {
            if(err){
                callback(false);
            }else if(res) {
                console.log('res1',res);
                Alert.alert(
                    'Exito',
                    'Se encontro un usuario previamente registradp',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate('Validacion')},
                    ],
                    {cancelable: false},
                );
                this.setInfoUsuario(res);
                callback(true);
            }
            console.log('users.insert', err, res);
        });

    }

    setInfoUsuario(response) {
        /**
         *  aqui enviariamos el usuario existente de el response de mateor
         */
        
        // this.setState({ 
        //     usuario: {
        //         ...this.state.usuario, 
        //         userId: data.userId,
        //         fichaMedica: res.recordId
        //     }
        // });
        await AsyncStorage.setItem('myuser', JSON.stringify(this.state.usuario));

    }

    guardarUsuarioNuevoMetior(){
        Meteor.call('users.insert',  this.state.usuario , async (err, res) => {
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
                console.log('res',res);
                this.generaFichaMedica({
                    userId: res.userId,
                });
            }
            console.log('users.insert', err, res);
        });
    }

    generaFichaMedica(data) {
        Meteor.call('medical.save',  data , async (err, res) => {
            console.log('data',data);
            if(err) {
                Alert.alert(
                            'Error',
                            err.message,
                            [
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            {cancelable: false},
                            );
            } else if(res) {
                console.log('res1',res);
                Alert.alert(
                    'Exito',
                    'Se agrego correctamente',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate('Validacion')},
                    ],
                    {cancelable: false},
                );

                this.setState({ 
                    usuario: {
                        ...this.state.usuario, 
                        userId: data.userId,
                        fichaMedica: res.recordId
                    }
                });
                await AsyncStorage.setItem('myuser', JSON.stringify(this.state.usuario));
            }
        });
    }

    render(){
        return(
            <ScrollView>
            <View style = {styles.container}>
                <Encabezado/>
                <Text style = {styles.heading}> Registro </Text>
                    
                    <Text style = {styles.titulo}> Datos telefónicos </Text>
                    <Text style = {styles.label}> Numero de Celular </Text>
                    <TextInput
                            style = {styles.input}
                            placeholder = '5528980930'
                            keyboardType = 'numeric'
                            onChangeText = {(text) => {
                                const usuario = this.state.usuario;
                                usuario.numeroTelefono = text;
                                this.setState({...this.state, usuario});
                            }}
                            value = {this.state.usuario.numeroTelefono}
                        />

                    <Picker 
                        style = {styles.compania}
                        selectedValue = {this.state.usuario.compania} 
                        onValueChange = {(itemValue, itemIndex)=> this.updateCompania(itemValue)}>
                        <Picker.Item label = 'Telcel' value = 'telcel'/>
                        <Picker.Item label = 'Movistar' value = 'movistar'/>
                        <Picker.Item label = 'ATYT' value = 'aTYT'/>
                        <Picker.Item label = 'Unefon' value = 'unefon'/>
                    </Picker>



                    <Text style = {styles.titulo}> Datos personales </Text>
                    <Text style = {styles.label}> Nombre(s)</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Veronica'
                            onChangeText = {(text) => {
                                const usuario = this.state.usuario;
                                usuario.nombre = text;
                                this.setState({...this.state, usuario});
                            }}
                            value = {this.state.usuario.nombre}
                        />
                    <Text style = {styles.label}> Apellido Paterno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Miranda'
                            onChangeText = {(text) => {
                                const usuario = this.state.usuario;
                                usuario.apellidoPaterno = text;
                                this.setState({...this.state, usuario});
                            }}
                            value = {this.state.usuario.apellidoPaterno}
                        />
                    <Text style = {styles.label}> Apellido Materno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Ramirez'
                            onChangeText = {(text) => {
                                const usuario = this.state.usuario;
                                usuario.apellidoMaterno = text;
                                this.setState({...this.state, usuario});
                            }}
                            value = {this.state.usuario.apellidoMaterno}
                        />
                    <Text style = {styles.label}> Correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'veronica@escom.mx'
                            onChangeText = {(text) => {
                                const usuario = this.state.usuario;
                                usuario.correoElectronico = text;
                                this.setState({...this.state, usuario});
                            }}
                            value = {this.state.usuario.correoElectronico}
                        />
                    <Text style = {styles.label}> Confirma tu correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'veronica@escom.mx'
                            onChangeText = {(text) => this.setState({confirCorreo: text})}
                            value = {this.state.confirCorreo}
                        />

                    <Text style = {styles.label}> Ingresa tu fecha de nacimiento</Text>
                        <DatePicker
                            style={styles.calendario}
                            date={this.state.FechaNacimiento} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="Selecciona tu fecha"
                            format="DD-MM-YYYY"
                            minDate="01-01-1900"
                            maxDate="31-12-2021"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            
                            onDateChange={(date) => {
                                const usuario = this.state.usuario;
                                usuario.fechaNacimento = date;
                                this.setState({...this.state, usuario})}}
                        />

                <Text style = {styles.label}> Sexo </Text>
                        <RadioForm
                            style={styles.sexo}
                            radio_props={Sexo}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => {
                                const usuario = this.state.usuario;
                                usuario.sexo = value;
                                this.setState({...this.state, usuario})
                            }}
                        />

<Text style = {styles.titulo}> Datos domicilio </Text>

<Text style = {styles.label}> Codigo Postal </Text>
    <TextInput
        style = {styles.input}
        placeholder = '59874'
        keyboardType = 'numeric'
        onChangeText = {(text) => {
            const usuario = this.state.usuario;
            usuario.codigoPostal = text;
            this.setState({...this.state, usuario});
        }}
        value = {this.state.usuario.codigoPostal}
    />

<Text style = {styles.label}> Calle(s)</Text>
    <TextInput
        style = {styles.input}
        placeholder = 'San Pedro'
        onChangeText = {(text) => {
            const usuario = this.state.usuario;
            usuario.calle = text;
            this.setState({...this.state, usuario});
        }}
        value = {this.state.usuario.calle}
    />

<Text style = {styles.label}> No. Exterior</Text>
    <TextInput
        style = {styles.input}
        placeholder = '36'
        onChangeText = {(text) => {
            const usuario = this.state.usuario;
            usuario.noExterior = text;
            this.setState({...this.state, usuario});
        }}
        value = {this.state.usuario.noExterior}
    />

<Text style = {styles.label}> No. Interior</Text>
    <TextInput
        style = {styles.input}
        placeholder = '4-A'
        onChangeText = {(text) => {
            const usuario = this.state.usuario;
            usuario.noInterior = text;
            this.setState({...this.state, usuario});
        }}
        value = {this.state.usuario.noInterior}
    />

<Text style = {styles.label}> Colonia </Text>
    <TextInput
        style = {styles.input}
        placeholder = 'Anzures'
        onChangeText = {(text) => {
            const usuario = this.state.usuario;
            usuario.colonia = text;
            this.setState({...this.state, usuario});
        }}
        value = {this.state.usuario.colonia}
    />

                    <CheckBox
                            style = {styles.checkBox}
                            Size = {40}
                            //value = {this.state.check}
                            checked = {this.state.check}
                            onChange = {() => this.checkBoxTest()}       
                   />

                    <TouchableOpacity 
                            style = {styles.terminos}
                            onPress={() => this.props.navigation.navigate('TerminosCondiciones')}>
                            <Text>Terminos y condiciones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style = {styles.privacidad}
                            onPress={() => this.props.navigation.navigate('AvisoPrivacidad')}>
                            <Text style = {styles.privacidadText}>
                                Aviso de privacidad
                            </Text>
                    </TouchableOpacity>

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => { this.guardarUsuarioNuevo();}}>
                            <Text style = {styles.buttonText}>ENVIAR</Text>
                        </TouchableOpacity>
                    </View>


            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    heading:{
        fontSize: 28,
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 130,
        margin: 5,
    },

    titulo:{
        fontSize: 28,
        justifyContent: 'center',
        paddingLeft: 15,
        margin: 5,
    },

    label:{
        fontSize: 18,
        paddingLeft: 40,
    },

    input:{
        margin:15,
        marginLeft: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#803c3f',
        width: 310,
    },

    buttonContainer: {
        margin: 20,
        paddingLeft:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    compania:{
        marginLeft: 36,
        fontSize: 18,
        
    },

    calendario:{
        width: 300,
        marginLeft: 36,
        paddingTop: 20,
        paddingBottom: 20,
    },

    sexo:{
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-evenly',
        borderColor : '#803c3f'
    },

    button:{
        flex: 3,
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

    checkBox:{
        flex: 1, 
        margin: 30,
        padding: 10
    },

    terminos:{
        margin: 70,
        //No mover marginTop
        marginTop: -57,
    },

    privacidad:{
        margin: 70,
        marginTop: -50,
    },

    privacidadText:{
        textDecorationLine: 'underline'
    }
});


export default withTracker(params => {
     //Meteor.subscribe('users');
   
    return {
      //users: Meteor.collection('users').find(),
      //incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    };
  })(RegistroUsuario);
