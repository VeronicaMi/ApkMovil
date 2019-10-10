import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
//npm i react-native-app-intro-slider --save

export default class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showRealApp: false,
          //To show the main page of the app
        };
      }
    
    static navigationOptions = {
        header: null,
    }

    _onDone = () => {
        // After user finished the intro slides. Show real app through
        // navigation or simply by controlling state
        this.props.navigation.navigate('RegistroUsuario');
      };
      _onSkip = () => {
        // After user skip the intro slides. Show real app through
        // navigation or simply by controlling state
        this.props.navigation.navigate('RegistroUsuario');
      };    

    render(){
         //If false show the Intro Slides
         if (this.state.showRealApp) {
            //Real Application
        return(
            <TouchableOpacity  onPress = {() => this.props.navigation.navigate('RegistroUsuario')}>
                <Text style= {{color: 'red', margin : 150, fontSize: 36}}>Envia</Text>
            </TouchableOpacity>
        );
    }
    else {
        //Intro slides
        return (
          <AppIntroSlider
            slides={slides}
            //comming from the JsonArray below
            onDone={this._onDone}
            //Handler for the done On last slide
            showSkipButton={true}
            onSkip={this._onSkip}
          />
        );
      }
    }
};

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginTop: 16,
    },
  });
   
  const slides = [
    {
      
      key: 's1',
      text: 'Aplicación para el reporte de emergencias dentro del municipio de Naucalpan de Juaréz',
      title: 'Bienvenida',
      titleStyle: styles.title,
      textStyle: styles.text,
      image: {
        uri: 'https://i.postimg.cc/x8ymhMYN/AppMovil.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#803c3f',
    },
    {
      
      key: 's2',
      text: 'Debes completar el formulario para darte de alta en el sistema, no olvides aceptar los términos y condiciones',
      title: 'Registro',
      titleStyle: styles.title,
      textStyle: styles.text,
      image: {
        uri: 'https://i.postimg.cc/GmTtVvb7/Registro.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#803c3f',
    },
    {
      key: 's3',
      text: 'Te llegara un codigo de confirmación vía SMS para corroborar tu identidad',
      title: 'Confirmación',
      titleStyle: styles.title,
      textStyle: styles.text,
      image: {
        uri:
          'https://i.postimg.cc/2SdR15Gj/SMS.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#803c3f',
    },
    {
      key: 's4',
      title: 'Emergencias',
      text: 'Ahora puedes reportar emergencias médicas, policiales y de protección civil ',
      titleStyle: styles.title,
      textStyle: styles.text,
      image: {
        uri: 'https://i.postimg.cc/T2ZH66xR/Emergencia.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#803c3f',
    },
    {
      key: 's5',
      title: 'Llamada 911',
      text: ' Comunicación con el 911 llamada de emergencia nacional',
      titleStyle: styles.title,
      textStyle: styles.text,
      image: {
        uri: 'https://i.postimg.cc/qB82NVnB/911.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#803c3f',
    },
    {
      key: 's6',
      title: 'Comunicación de emergencias',
      text: 'Atención personalizada mediante la comuicación por chat',
      titleStyle: styles.title,
      textStyle: styles.text,
      
      image: {
        uri:
          'https://i.postimg.cc/gcNkSgbq/Chat.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#803c3f',
    },
    {
      key: 's7',
      title: 'Botón de pánico',
      text: 'Opción de botón de pánico para emergencias de suma importancia',
      titleStyle: styles.title,
      textStyle: styles.text,
      image: {
        uri:
          'https://i.postimg.cc/63K5SSQz/Boton-Panico.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#803c3f',
    },
  ];