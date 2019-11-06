import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class BotonPanico extends Component{
    state = {MedicalEmer: '',
             PolicialEmer: '',
             ProtecCivilEmer: '',
             tipoEmergencia: '' }
    items = {
    '10104':'Accidente de coche con heridos',
    '10309':'Electrocutado',
    '10304':'Infarto',
    '10324':'Sobredosis',
    '10325':'Trabajo de parto',
    '10301':'Ahogado',
    '30409':'Robo',
    '30605':'Secuestro',
    '30202':'Disparo de arma',
    '30503':'Violencia Familiar',
    '30701':'Abuso sexual',
    '30906':'Homicidio',
    '31001':'Allanamiento de morada',
    '20110':'Incendio',
    '20107':'Explosión',
    '20202':'Derrumbe',
    '20207':'Inundación',
    '20204':'Erupción Volcánica',
    '20203':'Enjambre de abejas',};

    updateMedicalEmer = (MedicalEmer) => {
        this.setState({MedicalEmer: MedicalEmer,
                       PolicialEmer: '',
                       ProtecCivilEmer: '',
                       tipoEmergencia: MedicalEmer});
    }

    updatePolicialEmer = (PolicialEmer) => {
        this.setState({MedicalEmer: '',
                       PolicialEmer: PolicialEmer,
                       ProtecCivilEmer: '',
                       tipoEmergencia: PolicialEmer});
    }

    updateProtecCivilEmer = (ProtecCivilEmer) => {
        this.setState({MedicalEmer: '',
                       PolicialEmer: '',
                       ProtecCivilEmer: ProtecCivilEmer,
                       tipoEmergencia: ProtecCivilEmer});
    }

    guardarOpcionPanico = async (opcion) => {
        await AsyncStorage.setItem('opcionPanico', opcion);
    }

    componentDidMount = async () => {
      const opcion = await AsyncStorage.getItem('opcionPanico');
      console.log(opcion);
      if(opcion) {
        this.setState({MedicalEmer: opcion,
                       PolicialEmer: opcion,
                       ProtecCivilEmer: opcion,
                       tipoEmergencia: opcion});     
      }
    }

    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                 <Text style = {styles.label}> Emergencia Médica </Text>

                    <Picker 
                        style = {styles.tipoEmergencia}
                        selectedValue = {this.state.MedicalEmer} 
                        onValueChange = {(itemValue, itemIndex)=>this.updateMedicalEmer(itemValue)}>
                        <Picker.Item label = '' value = ''/>
                        <Picker.Item label = '' value = ''/>
                        <Picker.Item label = 'Accidente de coche con heridos' value = '10104'/>
                        <Picker.Item label = 'Electrocutado' value = '10309'/>
                        <Picker.Item label = 'Infarto' value = '10304'/>
                        <Picker.Item label = 'Sobredosis' value = '10324'/>
                        <Picker.Item label = 'Trabajo de parto' value = '10325'/>
                        <Picker.Item label = 'Ahogado' value = '10301'/>
                    </Picker>

                    <Text style = {styles.label}> Emergencia Polícial </Text>

                    <Picker 
                        style = {styles.tipoEmergencia}
                        selectedValue = {this.state.PolicialEmer} 
                        onValueChange = {(itemValue, itemIndex)=>this.updatePolicialEmer(itemValue)}>
                        <Picker.Item label = '' value = ''/>
                        <Picker.Item label = 'Robo' value = '30409'/>
                        <Picker.Item label = 'Secuestro' value = '30605'/>
                        <Picker.Item label = 'Disparo de arma' value = '30202'/>
                        <Picker.Item label = 'Violencia Familiar' value = '30503'/>
                        <Picker.Item label = 'Abuso sexual' value = '30701'/>
                        <Picker.Item label = 'Homicidio' value = '30906'/>
                        <Picker.Item label = 'Allanamiento de morada' value = '31001'/>
                    </Picker>

                    <Text style = {styles.label}> Emergencia Protección Cívil </Text>

                    <Picker 
                        style = {styles.tipoEmergencia}
                        selectedValue = {this.state.ProtecCivilEmer} 
                        onValueChange = {(itemValue, itemIndex)=>this.updateProtecCivilEmer(itemValue)}>
                        <Picker.Item label = '' value = ''/>
                        <Picker.Item label = 'Incendio' value = '20110'/>
                        <Picker.Item label = 'Explosión' value = '20107'/>
                        <Picker.Item label = 'Derrumbe' value = '20202'/>
                        <Picker.Item label = 'Inundación' value = '20207'/>
                        <Picker.Item label = 'Erupción Volcánica' value = '20204'/>
                        <Picker.Item label = 'Enjambre de abejas' value = '20203'/>
                    </Picker>

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => this.guardarOpcionPanico(this.state.tipoEmergencia)}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View>
                            <Text>Emergencia serlecionada:</Text>
                            <Text>{this.items[this.state.tipoEmergencia]}</Text>
                        </View>
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

    tipoEmergencia:{
        marginLeft: 36,
        fontSize: 18,
        
    },

    label:{
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 20,
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