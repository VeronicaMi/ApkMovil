import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Slider from './Slider.js';
import RegistroUsuario from './RegistroUsuario.js';
import DrawerNav from '../Navegadores/DrawerNav.js';
import TerminosCondiciones from '../Navegadores/Navegacion/TerminosCondiciones.js';
import AvisoPrivacidad from '../Navegadores/Navegacion/AvisoPrivacidad.js';
import ValidacionTelefono from "./ValidacionTelefono";

const InicioNavegacion = createStackNavigator({
    Slider: Slider,
    RegistroUsuario: RegistroUsuario,
    TerminosCondiciones: TerminosCondiciones,
    AvisoPrivacidad: AvisoPrivacidad,
    DrawerNav: DrawerNav,
    Validacion: ValidacionTelefono

});

const InicioNav = createAppContainer(InicioNavegacion);

export default InicioNav;
