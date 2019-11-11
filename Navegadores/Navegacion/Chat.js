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
    withTracker, Tracker,
} from "react-native-meteor";

import { Ionicons } from '@expo/vector-icons';
import JavaTwilio from "./TwilioServ";

/** Connect to server.*/
Meteor.connect("ws://10.0.0.9:3000/websocket");

class Chat extends Component{

  constructor(props){
      super(props);
      const { navigation } = props;
  
      const id_final = navigation.getParam('id_final', undefined);
      const otro = navigation.getParam('otro', undefined);

      this.state = {
          messages: [],
          mensaje : '',
          usuario: undefined
      };
  };

  async componentDidMount() {
      const itemUsuario = await AsyncStorage.getItem('myuser');
      this.setState({usuario: itemUsuario});
      console.log(this.props.navigation.state.params.room);
      const handle = Meteor.subscribe('reportMessagesPublication', this.props.navigation.state.params.room);
      this.messagesTracker = Tracker.autorun(() => {
          if (handle.ready()) {
              const messages = Meteor.collection('messages').find({});
              this.setState({ messages });
          }
      });

  }

  componentWillUnmount() {
      this.messagesTracker.stop();
  }

    insert () {
      const mssg = {
        usuario: `${this.state.usuario.nombre} ${this.state.usuario.apellidoPaterno}`,
        body: this.state.mensaje,
        timestamp: new Date().getTime()
      };
      //this.props.messages.push(mssg);
      JavaTwilio.sendMessage( this.state.mensaje, (err) => {
          console.log(err)
      }, (msg) => {
          console.log(msg)
      } );
      this.setState({
        mensaje:''
      });
  }

  render (){

      const list = this.props.messages.map(function ({tipoEmisor,body,time},index){
          const d = new Date(time);
          const dformat = !d.getMonth() ?'-': [d.getMonth()+1,
                     d.getDate(),
                     d.getFullYear()].join('/')+' '+
                    [d.getHours(),
                     d.getMinutes(),
                     d.getSeconds()].join(':');

          return (
              <View key={index} >
                  <View style={{flexDirection: 'row'}}>
                      {console.log(tipoEmisor)}
                      {tipoEmisor === 'operator'
                          ? <View style={styles.msgLeft}>
                              <Text style={styles.dateText}>{dformat}</Text>
                              <View style={styles.msg}>
                                  <Text style={styles.msnText}>{body}</Text>
                              </View>
                          </View>
                          : <View style={styles.msgRight}>
                              <View style={styles.msg}>
                                  <Text style={styles.msnText}>{body}</Text>
                              </View>
                          </View>}
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

      msg: {
          display: 'flex',
          flexDirection: 'column',
      },

      msnText:{
        backgroundColor:'#497580', 
        borderRadius: 24,
        color: '#fff',
        padding: 5,
        fontSize: 14,
      },

      msgRight: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignSelf: 'flex-end'
      },

      msgLeft: {
          display: 'flex',
          justifyContent: 'flex-start',
          alignSelf: 'flex-start'
      },

      msnTextVista:{
        flex: 7, 
        backgroundColor: '#fff',
        //alignSelf: 'flex-end',
        //justifyContent: 'flex-end',
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