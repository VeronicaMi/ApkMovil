import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
//npm i --save react-native-meteor
//https://www.npmjs.com/package/react-native-meteor

import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";

import { Ionicons } from '@expo/vector-icons';

/** Connect to server.*/
Meteor.connect("ws://10.0.0.9:3000/websocket");

class Chat extends Component{

  constructor(props){
      super(props);
      this.state = {
          messages: props.messages,
          mensaje : '',
      };
  };

  

  insert () {
      const mssg = {
        usuario: this.props.messages[0].usuario,
        body: this.state.mensaje,
        timestamp: new Date().getTime()
      };
      this.props.messages.push(mssg);
      Meteor.call('messages.insert',  mssg , (err, res) => {
        // Do whatever you want with the response
        console.log('messages.insert', err, res);
      });
      this.setState({
        mensaje:''
      });
  }

  render (){

      const list = this.props.messages.map(function ({usuario,body,timestamp},index){
          const d = new Date(timestamp);
          const dformat = !d.getMonth() ?'-': [d.getMonth()+1,
                     d.getDate(),
                     d.getFullYear()].join('/')+' '+
                    [d.getHours(),
                     d.getMinutes(),
                     d.getSeconds()].join(':');

          return (
          <View   key={index}
                  style={ styles.dateView }>
            <View style={{flexDirection: 'row'}}>
                <Text style = {styles.dateText}>{dformat}</Text>
                <Text style={styles.msnText}>{body}</Text>
            </View>
          </View>
          );
        });


      return(
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1}}>
          </View>
              <View style={styles.msnTextVista} >
                  {list}
              </View>
              {/*comentario*/}

              <View style={styles.textInputContainer} >
              
              <TouchableOpacity style ={styles.icono}
                                  onPress = {() => alert("Hola")}>
                    <Ionicons name="ios-camera" size = {32} color = "#497580" />
                </TouchableOpacity>

                <TextInput style={styles.input}
                    placeholder = '  Mensaje'
                    onChangeText = {(text) => this.setState({mensaje: text})}
                    value = {this.state.mensaje}
                />

                <TouchableOpacity style={styles.icono}
                                  onPress ={() => this.insert()  }>
                    <Ionicons name="ios-send" size={32} color="#497580" />
                </TouchableOpacity>
              </View>
              
          </View>
      );
  }
}


export default withTracker(params => {
    Meteor.subscribe('messages');
   
    return {
      messages: Meteor.collection('messages').find(),
      //incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    };
  })(Chat);
  

  const styles = StyleSheet.create({
    dateView:{
      alignSelf: 'flex-end',
      margin: 4,
    },
      date: {

      },
      
      dateText:{
        color: '#cfcfcf',
        padding: 5,
        fontSize: 10,
      },

      msnText:{
        backgroundColor:'#497580', 
        borderRadius: 24,
        color: '#fff',
        padding: 5,
        fontSize: 14,
      },

      msnTextVista:{
        flex: 7, 
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        paddingBottom: 10
      },

      textInputContainer:{
        height: 55, 
        backgroundColor: '#803c3f',
        flexDirection: 'row',
      },

      input:{
        flex:8,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 20
      },

      icono:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      },

  });