import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox, Image
} from 'react-native';
//expo install react-native-maps
import MapView, { Marker } from 'react-native-maps';
//expo install expo-location
import * as Location from 'expo-location';
//expo install expo-permissions
import * as Permissions from 'expo-permissions';
//expo install expo-constants
//import {Constants, MapView, Location, Permissions} from 'expo';
import call from 'react-native-phone-call';
import  Conexion,{connect}  from '../../Componentes/Conexion.js';
import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";
connect();


class Home extends Component{
    state = {
        locationResult: '',
        hasLocationPermissions: false,
        marker: {coords: { latitude: 37.78825, longitude: -122.4324}},
        opcionPanico: opcion
    }

    async componentDidMount() {
      await this._getLocationAsync();
      const opcion = await AsyncStorage.getItem('opcionPanico');
      console.log(opcion);
      this.setState({
        ...this.state,
        opcionPanico: opcion
      });
    }
    botonPanico = async () => {
      const opcion = this.state.opcionPanico;
      const latitude = this.state.marker.coords.latitude;
      const longitude = this.state.marker.coords.longitude;
      const itemUsuario = await AsyncStorage.getItem('myuser');
      const myuser = JSON.parse(itemUsuario);
      const data = {
                     idIncidente: opcion,
                     userId: myuser._id,
                     ubicacion: {
                         lat: latitude,
                         lng: longitude
                      },
                    fechaHora: new Date()
                   };
      Meteor.call('panicButton.insert',  data , async (err, res) => {
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
                            {text: 'OK', onPress: () => this.props.navigation.navigate('DrawerNav')},
                            ],
                            {cancelable: false},
                    );
            }
            console.log('users.insert', err, res);
        });

        // 
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            locationResult: 'Permission to access location was denied',
          });
        } else {
          this.setState({ hasLocationPermissions: true });
        }
        
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
      this.setState({
          mapRegion: { latitude: location.coords.latitude, 
                      longitude: location.coords.longitude, 
                      latitudeDelta: 0.0022, longitudeDelta: 0.0041 },
          marker: location
      });
  };

    onCall(){
        const args = {
            number: '53712250', // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
      };
        call(args).catch(console.error);
    };

    render(){
        return(
          <ScrollView>
          <View style = {styles.container}>
              <MapView style={{ alignSelf: 'stretch', height: 400, margin: 15 }}
                region={this.state.mapRegion}
                onRegionChange={this._handleMapRegionChange}>
                    <MapView.Marker
                    coordinate={this.state.marker.coords}
                    title="My Marker"
                    description="Some description"
                    />
                </MapView>

                <View style = {styles.contIcon}>
                      <TouchableOpacity 
                      onPress = {() => this.onCall()}>
                        <Image
                            style = {styles.imagePhone}
                            source = {{uri: 'https://i.postimg.cc/xTqySGVL/call.png'}}

                        />
                        <Text style = {styles.textPhone}>Llamar al 911</Text>
                      </TouchableOpacity>

                      <TouchableOpacity 
                      onPress = {() => this.botonPanico}>
                        <Image
                            style = {styles.imageButton}
                            source = {{uri: 'https://i.postimg.cc/wT1gpq54/Boton-Panico2.png'}}

                        />
                        <Text style = {styles.textButton}>Botón de pánico</Text>
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
    flexDirection: 'column'

},

contIcon:{
    flex: 1,
    flexDirection: 'row',
    
},

    imagePhone:{
      marginTop: 69,
      marginLeft: 30,
        height: 100,
        width: 100,
    },
    textPhone:{
      marginLeft: 30,
      fontSize: 20,
  },

    imageButton:{
      marginTop: 28,
      marginLeft: 60,
      height: 140,
      width: 140,
  },

  textButton:{
    marginLeft: 60,
    fontSize: 20,
  },

    texto:{
        flex: 1,
        fontSize: 30,
    },

});

export default withTracker(params => {
    // Meteor.subscribe('users');
   
    return {
      //users: Meteor.collection('users').find(),
      //incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    };
  })(Home);