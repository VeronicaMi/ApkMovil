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
  Meteor.connect("wss://emergencias-c4-naucalpan.herokuapp.com/websocket");

}