import React from 'react';
import { AsyncStorage } from 'react-native';
import InicioNavegacion from './Componentes/InicioNavegacion.js';
import {connect} from "./Componentes/Conexion";
console.disableYellowBox = true;
connect();

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId: undefined,
      fichaMedica: undefined
    };
  };
  async componentDidMount() {
    const itemUsuario = await AsyncStorage.getItem('myuser')||undefined;
    if(itemUsuario) {
      const myuser = JSON.parse(itemUsuario);
      this.setState({
        ...this.state,
        userId: myuser.userId,
        fichaMedica: myuser.fichaMedica
      });
    } else {
      this.setState({
        ...this.state,
        userId: undefined,
        fichaMedica: undefined
      });
    }
  }  
  render(){
    return(
      <InicioNavegacion screenProps={{
        idUser: this.state.userId,
        elem:undefined,
        fichaMedica: this.state.fichaMedica
      }} />
    )
  }
}
