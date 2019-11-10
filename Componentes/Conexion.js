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
<<<<<<< HEAD
  Meteor.connect("wss://emergencias-c4-naucalpan.herokuapp.com/websocket");

=======
    console.log('Se solicita conexión');
    Meteor.connect("ws://192.168.100.70:3000/websocket");
>>>>>>> 9293039e8c29325ee667c57de94cd0f0900e1a6d
}