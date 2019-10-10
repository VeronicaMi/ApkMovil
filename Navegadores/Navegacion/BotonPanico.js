import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class BotonPanico extends Component{
    state = {MedicalEmer: '' }
    updateMedicalEmer = (MedicalEmer) => {
        this.setState({MedicalEmer: MedicalEmer})
    }

    state = {PolicialEmer: '' }
    updatePolicialEmer = (PolicialEmer) => {
        this.setState({PolicialEmer: PolicialEmer})
    }

    state = {ProtecCivilEmer: '' }
    updateProtecCivilEmer = (ProtecCivilEmer) => {
        this.setState({ProtecCivilEmer: ProtecCivilEmer})
    }

    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                 <Text style = {styles.label}> Emergencia Médica </Text>

                    <Picker 
                            style = {styles.tipoEmergencia}
                            selectedValue = {this.state.MedicalEmer} onValueChange = {this.updateMedicalEmer}>
                            <Picker.Item label = 'Accidente de coche con heridos' value = 'accidenteCoche'/>
                            <Picker.Item label = 'Electrocutado' value = 'electrocutado'/>
                            <Picker.Item label = 'Infarto' value = 'infarto'/>
                            <Picker.Item label = 'Sobredosis' value = 'sobredosis'/>
                            <Picker.Item label = 'Trabajo de parto' value = 'parto'/>
                            <Picker.Item label = 'Ahogado' value = 'ahogado'/>
                    </Picker>

                    <Text style = {styles.label}> Emergencia Polícial </Text>

                    <Picker 
                            style = {styles.tipoEmergencia}
                            selectedValue = {this.state.PolicialEmer} onValueChange = {this.updatePolicialEmer}>
                            <Picker.Item label = 'Robo' value = 'robo'/>
                            <Picker.Item label = 'Secuestro' value = 'secuestro'/>
                            <Picker.Item label = 'Disparo de arma' value = 'disparo'/>
                            <Picker.Item label = 'Violencia Familiar' value = 'violenciaFamiliar'/>
                            <Picker.Item label = 'Abuso sexual' value = 'abusoSexual'/>
                            <Picker.Item label = 'Homicidio' value = 'homicidio'/>
                            <Picker.Item label = 'Allanamiento de morada' value = 'allanamientoMorada'/>
                    </Picker>

                    <Text style = {styles.label}> Emergencia Protección Cívil </Text>

                    <Picker 
                            style = {styles.tipoEmergencia}
                            selectedValue = {this.state.ProtecCivilEmer} onValueChange = {this.updateProtecCivilEmer}>
                            <Picker.Item label = 'Incendio' value = 'incendio'/>
                            <Picker.Item label = 'Explosión' value = 'explosion'/>
                            <Picker.Item label = 'Derrumbe' value = 'derrumbe'/>
                            <Picker.Item label = 'Inundación' value = 'inundacion'/>
                            <Picker.Item label = 'Erupción Volcánica' value = 'erupcionVolcanica'/>
                            <Picker.Item label = 'Enjambre de abejas' value = 'enjambreAbejas'/>
                    </Picker>

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => alert('Hola')}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
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