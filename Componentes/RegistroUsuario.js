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

var Sexo = [
    {label: 'Femenino', value: 0 },
    {label: 'Masculino', value: 1 }
  ];

export default class RegistroUsuario extends Component{
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


    abreNav = () => {this.props.navigation.navigate('DrawerNav')}

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
                        onValueChange = {()=> this.updateCompania(this.state.usuario.compania)}>
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
                            customStyles={{
                                //dateIcon: {
                                //position: 'absolute',
                                //left: 5,
                                //top: 4,
                                //marginLeft: 5
                                //},
                            }}
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
                            value = {this.state.check}
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
                            onPress={() => { this.abreNav();}}>
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
