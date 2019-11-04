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
    'accidenteCoche':'Accidente de coche con heridos',
    'electrocutado':'Electrocutado',
    'infarto':'Infarto',
    'sobredosis':'Sobredosis',
    'parto':'Trabajo de parto',
    'ahogado':'Ahogado',
    'robo':'Robo',
    'secuestro':'Secuestro',
    'disparo':'Disparo de arma',
    'violenciaFamiliar':'Violencia Familiar',
    'abusoSexual':'Abuso sexual',
    'homicidio':'Homicidio',
    'allanamientoMorada':'Allanamiento de morada',
    'incendio':'Incendio',
    'explosion':'Explosión',
    'derrumbe':'Derrumbe',
    'inundacion':'Inundación',
    'erupcionVolcanica':'Erupción Volcánica',
    'enjambreAbejas':'Enjambre de abejas',};

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
                        selectedValue = {this.state.PolicialEmer} 
                        onValueChange = {(itemValue, itemIndex)=>this.updatePolicialEmer(itemValue)}>
                        <Picker.Item label = '' value = ''/>
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
                        selectedValue = {this.state.ProtecCivilEmer} 
                        onValueChange = {(itemValue, itemIndex)=>this.updateProtecCivilEmer(itemValue)}>
                        <Picker.Item label = '' value = ''/>
                        <Picker.Item label = 'Incendio' value = 'incendio'/>
                        <Picker.Item label = 'Explosión' value = 'explosion'/>
                        <Picker.Item label = 'Derrumbe' value = 'derrumbe'/>
                        <Picker.Item label = 'Inundación' value = 'inundacion'/>
                        <Picker.Item label = 'Erupción Volcánica' value = 'erupcionVolcanica'/>
                        <Picker.Item label = 'Enjambre de abejas' value = 'enjambreAbejas'/>
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