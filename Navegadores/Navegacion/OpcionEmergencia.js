import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class OpcionEmergencia extends Component{

   
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.contIcon}>
                    

                    <TouchableOpacity 
                        onPress = { () => this.props.onPressChat()}>
                        <Image
                            style = {styles.imageChat}
                            source = {{uri: 'https://i.postimg.cc/sxbzxP6v/ChatC4.png'}}
                            
                        />
                        <Text style = {styles.textChat}>Chatear C4</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};


const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    contIcon:{
        flexDirection: 'row',
    },
    
    imageChat:{
        marginTop: 80,
        margin: 50,
        height: 100,
        width: 100,
    },

    textChat:{
        marginLeft: 40,
        marginTop: -40,
        fontSize: 20,
    }
});