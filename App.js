import React from 'react';
import { AsyncStorage } from 'react-native';
import InicioNavegacion from './Componentes/InicioNavegacion.js';
import {connect} from "./Componentes/Conexion";

connect();

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId: undefined,
    };
  };
  async componentDidMount() {
    const itemUsuario = await AsyncStorage.getItem('myuser')||"{}";
    const myuser = JSON.parse(itemUsuario);
    this.setState({
      ...this.state,
      userId: myuser.userId
    });
  }  
  render(){
    return(
      <InicioNavegacion screenProps={{idUser: this.state.userId}} />
    )
  }
}
