import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";

export default class Conexion {

};

export function connect () {
    /** Connect to server.*/
    console.log('Se solicita conexión');
    Meteor.connect("ws://192.168.100.70:3000/websocket");
}