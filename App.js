import React from 'react';
import InicioNavegacion from './Componentes/InicioNavegacion.js';
import {connect} from "./Componentes/Conexion";

connect();

export default class App extends React.Component{
  render(){
    return(
      <InicioNavegacion />
    )
  }
}
