//This is an example of Tab inside Navigation Drawer in React Native//

//npm install react-navigation
//expo install react-native-gesture-handler react-native-reanimated

import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet, Platform, View, Text,
  Image, TouchableOpacity,
} from 'react-native';

//Import required react-navigation component 
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';
//npm install native-base
import {Container, Content, Header, Left, Body, Icon  } from 'native-base';
//Import all the screens for Drawer/ Sidebar
import Home from './Navegacion/Home.js';
import BotonPanico from './Navegacion/BotonPanico.js';
import EmerMedica from './Navegacion/EmergenciaMedica.js';
import EmerPolicial from './Navegacion/EmergenciaPolicial.js';
import EmerProCivil from './Navegacion/EmergenciaProteccionCivil.js';
import DatosMedicos from './Navegacion/DatosMedicos.js';
import Contacto from './Navegacion/Contactos.js';
import TermCond from './Navegacion/TerminosCondiciones.js';
import AvisoPrivacidad from './Navegacion/AvisoPrivacidad.js';



//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={{uri : 'https://i.postimg.cc/Xvk1wQFD/menu.png'}}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Home_StackNavigator = createStackNavigator({
  
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#803c3f',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Panico_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Second: {
    screen: BotonPanico,
    navigationOptions: ({ navigation }) => ({
      title: 'Configuración botón de pánico',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#803c3f',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for First Option of Navigation Drawer
const EmerMedica_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Third: {
    screen: EmerMedica,
    navigationOptions: ({ navigation }) => ({
      title: 'Emergencia Médica',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#803c3f',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for Second Option of Navigation Drawer
const EmerPolicial_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Fourth: {
    screen: EmerPolicial,
    navigationOptions: ({ navigation }) => ({
      title: 'Emergencia Policial',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#803c3f',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for Third Option of Navigation Drawer
const EmerProCivil_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fifth: {
    screen: EmerProCivil,
    navigationOptions: ({ navigation }) => ({
      title: 'Emergencia Protección Civil',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#803c3f',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DatosMedicos_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Sixth: {
    screen: DatosMedicos,
    navigationOptions: ({ navigation }) => ({
      title: 'Datos Médicos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#803c3f',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Contactos_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Seventh: {
    screen: Contacto,
    navigationOptions: ({ navigation }) => ({
      title: 'Contactos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#803c3f',
      },
      headerTintColor: '#fff',
    }),
  },
});

const TerCon_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Eighth: {
    screen: TermCond,
    navigationOptions: ({ navigation }) => ({
      title: 'Términos y condiciones',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#803c3f',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Privacidad_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Nineth: {
    screen: AvisoPrivacidad,
    navigationOptions: ({ navigation }) => ({
      title: 'Aviso de privacidad',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#803c3f',
      },
      headerTintColor: '#fff',
    }),
  },
});

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style = {{height: 170, backgroundColor: 'white'}}>
            <Body>
                <Image 
                      style = {{ width:260, height:70,}}
                      source = {{uri: 'https://i.postimg.cc/hjp4WKjM/Logo-Naucalpan.png'}}
                />
                
            </Body>
        </Header>
          <Content>
            <DrawerItems{...props}/>
          </Content>
    </Container>
    
  
)

//Drawer Navigator for the Navigation Drawer / Sidebar
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Home: {
    //Title
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Inicio',
    },
  },

  BotonPanico: {
    //Title
    screen: Panico_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Configuracion de botón de pánico',
    },
  },

  EmerMedica: {
    //Title
    screen: EmerMedica_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Emergencia Médica',
    },
  },

  EmerPolicial: {
    //Title
    screen: EmerPolicial_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Emergencia Policial',
    },
  },

  EmerProCivil: {
    //Title
    screen: EmerProCivil_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Emergencia Protección Civil',
    },
  },

  DatosMedicos: {
      screen: DatosMedicos_StackNavigator,
      navigationOptions:{
        drawerLabel: 'Datos Médicos',
      },
    },

    Contacto: {
      screen: Contactos_StackNavigator,
      navigationOptions:{
        drawerLabel: 'Contactos',
      },
    },

    TermCond: {
      screen: TerCon_StackNavigator,
      navigationOptions:{
        drawerLabel: 'Términos y condiciones',
      },
    },

    AvisoPrivacidad: {
      screen: Privacidad_StackNavigator,
      navigationOptions:{
        drawerLabel: 'Aviso de privacidad',
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    
});




DrawerNavigatorExample.navigationOptions = {header: null};
//const DrawerNav = createAppContainer(DrawerNavigatorExample);
export default DrawerNavigatorExample;

/*<Text style = {{textAlign: 'center', fontSize:16, fontWeight: 'bold', }}>Usuario Nombre</Text>*/