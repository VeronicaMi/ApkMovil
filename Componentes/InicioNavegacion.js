import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Slider from './Slider.js';
import RegistroUsuario from './RegistroUsuario.js';
import DrawerNav from '../Navegadores/DrawerNav.js';
import TerminosCondiciones from '../Navegadores/Navegacion/TerminosCondiciones.js';
import AvisoPrivacidad from '../Navegadores/Navegacion/AvisoPrivacidad.js';
import ValidacionTelefono from "./ValidacionTelefono";
import RecuperacionUsuario from "./RecuperacionUsuario.js";

const InicioNavegacion = createStackNavigator({
    Slider: Slider,
    RegistroUsuario: RegistroUsuario,
    RecuperacionUsuario: RecuperacionUsuario,
    TerminosCondiciones: TerminosCondiciones,
    AvisoPrivacidad: AvisoPrivacidad,
    Validacion: ValidacionTelefono,
    DrawerNav: DrawerNav,
},
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }
       });

const InicioNav = createAppContainer(InicioNavegacion);

export default InicioNav;
