import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';

export default class Encabezado extends React.Component{

        constructor(props){
            super(props);
        }

        render(){
            return(
                <View style = {styles.headStyle}>
                    <Image
                    style ={styles.heroImagen}
                    source = {{uri: 'https://i.postimg.cc/wTfF0YB5/1.png'}}  
                    />
                </View>
            );
        }
}

const styles = StyleSheet.create({
    headStyle:{
        paddingTop: 30,
        backgroundColor: '#ffffff'
    },

    headText:{
        textAlign: 'center',
        fontSize: 30,
        color: '#FF0000'
    },

    heroImagen:{
        alignItems: "center",
        width: '100%',
        height: 100,
    },

})