import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, AsyncStorage, FlatList
} from 'react-native';
import Meteor, {
    withTracker, Tracker,
} from "react-native-meteor";

import { Ionicons } from '@expo/vector-icons';
import JavaTwilio from "./TwilioServ";


class Chat extends Component{

    constructor(props){
        super(props);
        const { navigation } = props;
        const room = navigation.getParam('room', undefined);

        this.state = {
            messages: [],
            mensaje : '',
            usuario: undefined,
            room: room
        };
    };

    async componentDidMount() {
        const itemUsuario = await AsyncStorage.getItem('myuser');
        this.setState({usuario: itemUsuario});
        const handle = Meteor.subscribe('reportMessagesPublication', this.state.room);
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
        JavaTwilio.sendMessage( this.state.mensaje, (err) => {
            console.log(err)
        }, (msg) => {
            console.log(msg)
        } );
        this.setState({
            mensaje:''
        });
    };

    render (){
        console.log(this.props.messages);
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
                <FlatList
                    data={this.props.messages}
                    renderItem={({item}) => <Item message={item}/>}
                    keyExtractor={item => item._id}
                />

                <View style={styles.textInputContainer} >
                    <TouchableOpacity style ={styles.icono}
                                      onPress = {() => alert("Hola")}>
                        <Ionicons name="md-camera" size = {32} color = "#497580" />
                    </TouchableOpacity>
                    <TextInput style={styles.input}
                               placeholder = '  Mensaje'
                               onChangeText = {(text) => this.setState({mensaje: text})}
                               value = {this.state.mensaje}
                    />
                    <TouchableOpacity style={styles.icono}
                                      onPress ={() => this.insert()  }>
                        <Ionicons name="md-send" size={32} color="#497580" />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

function Item ({message}) {
    console.log(message);
    const d = new Date(message.time);
    const dformat = !d.getMonth() ?'-': [d.getMonth()+1,
            d.getDate(),
            d.getFullYear()].join('/')+' '+
        [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');
    return (
        <View>
            <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                {message.tipoEmisor === 'operator'
                    ? <View style={styles.msgLeft}>
                        <Text style={styles.dateText}>{dformat}</Text>
                        <View style={styles.msg}>
                            <Text style={styles.msnTextOp}>{message.body}</Text>
                        </View>
                    </View>
                    : <View style={styles.msgRight}>
                        <Text style={styles.dateText}>{dformat}</Text>
                        <View style={styles.msg}>
                            <Text style={styles.msnTextCit}>{message.body}</Text>
                        </View>
                    </View>}
            </View>
        </View>
    )
}

export default withTracker(() => {
    return {
        messages: Meteor.collection('messages').find()
    };
})(Chat);


const styles = StyleSheet.create({

    dateText:{
        color: '#422d3d',
        padding: 5,
        fontSize: 12,
    },

    msg: {
        display: 'flex',
        flexDirection: 'column',
    },

    msnTextCit:{
        backgroundColor:'#497580',
        borderRadius: 24,
        color: '#fff',
        padding: 5,
        fontSize: 16,
    },

    msnTextOp:{
        backgroundColor:'#d9dfc7',
        borderRadius: 24,
        color: '#422d3d',
        padding: 5,
        fontSize: 16,
    },

    msgRight: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: 10
    },

    msgLeft: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10
    },

    msnTextVista:{
        flex: 7,
        backgroundColor: '#fff',
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