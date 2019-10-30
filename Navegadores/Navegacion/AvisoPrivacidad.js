import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class AvisoPrivacidad extends Component{
    static navigationOptions = {
        title: 'Aviso de Privacidad'
    }

    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Text style = {styles.texto}>
                    De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares <Text style={styles.labelBold}>Veronica Miranda y Larry Jaguey</Text> pone a su disposición el siguiente aviso de privacidad.
                </Text>
            </View>
        <Text>{"                                  "}</Text>

            <View style = {styles.container}>
                <Text style = {styles.texto}>
<Text style={styles.labelBold}>Veronica Miranda y Larry Jaguey</Text>, es responsable del uso y protección de sus datos personales, en este sentido y atendiendo las obligaciones legales establecidas en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, a través de este instrumento se informa a los titulares de los datos, la información que de ellos se recaba y los fines que se le darán a dicha información.
                </Text>
            </View>
        <Text>{"                                  "}</Text>

        <View style = {styles.container}>
            <Text style = {styles.texto}>
Además de lo anterior, informarnos a usted que <Text style={styles.labelBold}>Veronica Miranda y Larry Jaguey</Text>, tiene su domicilio ubicado en:

Av. Juan de Dios Bátiz sin esq. Av. Miguel Othón de Mendizábal. Colonia Lindavista. Alcaldía: Gustavo A. Madero. C. P. 07738. Ciudad de México.

Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades, las cuales son necesarias para concretar nuestra relación con usted, así como atender los servicios y/o pedidos que solicite:

Brindando atención personalizada y única hacia su persona, por las cuestiones de emergencia que requiera personalmente, datos de ficha medica personal y creación de su red de contactos.

Para Ilevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:

Numero de telefónico
Camparía celular
Nombre
Apellido paterno
Apellido materno
Correa electrónico
Fecha de nacimiento
Sexo
Calle
No. Exterior
No. Interior
Colonia
Código postal
Además de estos datos personales, se hará uso de los siguientes datos que conforme a ley son considerados coma datos personales sensibles, por lo cual requieren de su autorización expresa y por escrito para poder hacer uso de ellos. En ese sentido, en caso de que usted autorice el uso de este tipo de datos, deberá aceptar los Términos y condiciones que al principio se presentaron, en caso contrario no podrá hacer uso de la aplicación y sus datos no serán compartidos con nosotros.

Autorizo el uso de los datos que a continuación se mencionan:

Grupo sanguíneo
Alergias
Enfermedad crónica
Padecimientos
Suministro de medicamentos
Peso
Talla
Donante de Órganos
Nombre del contacto
Teléfono del contacto

Antes de aceptar lea completamente el párrafo que antecede)

Por otra parte, informamos a usted, que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o persona distintas a nosotros y serán utilizados exclusivamente para los fines señalados.

Usted tiene en todo momento el derecho a conocer que datos personales tenemos de usted, para que los utilizamos y las condiciones del usa que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que este desactualizada, sea inexacta o incompleta (Rectificación); de igual manera, tiene derecho a que su información se elimine de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como también a oponerse al use de sus datos personales para fines específicos (Oposición). Estos
derechos se conocen como derechos ARCO.

Para el ejercicio de cualquiera de los derechos ARCO, se deberá presentar la solicitud respectiva a través de los formatos que estarán a su disposición en:

Av. Juan de Dios Bátiz sin esq. Av. Miguel Othón de Mendizábal. Colonia Lindavista. Alcaldía: Gustavo A. Madero. C. P. 07738 Ciudad de México.

Lo anterior también servirá para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, no obstante, la solicitud de ejercicio de estos derechos debe contener la siguiente información:

Nombre completo
Numero telefónico
Dirección
Correo electrónico

La respuesta a la solicitud se dará en 2 semanas y se comunicará de Ia siguiente manera:

A través del correo electrónico que se indique en la solicitud

Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar tramite a las solicitudes de derechos ARCO, son los siguientes:

a)Nombre del responsable: Veronica Miranda

b)Domicilio:

Av. Juan de Dios Bátiz sin esq. Av. Miguel Othón de Mendizábal. Colonia Lindavista. Alcaldía: Gustavo A. Madero. C. P. 07738 Ciudad de México.

c)Teléfono: 55 2898 0930

d)Correo electrónico: veronica.mi0806@gmail.com

Cabe mencionar, que en cualquier momento usted puede revocar su consentimiento para el use de sus datos personales. Del mismo modo, usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales.

Asimismo, usted deberá considerar que, para ciertos fines, la revocación de su consentimiento implicara que no podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.

Para revocar el consentimiento que usted otorga en este acto o para limitar su divulgación, se celebra presentar la solicitud respectiva a través del siguiente correo electrónico:

veronica.mi0806@gmail.com

Del mismo nodo, podrá solicitar la información para conocer el procedimiento y requisitos para Ia revocación del consentimiento, así como limitar el use y divulgación de su información personal, sin embargo, estas solicitudes deberán contener Ia siguiente información:

Nombre completo
Numero telefónico
Dirección
Correo electrónico

La respuesta a la solicitud de revocación o limitación de divulgación de sus datos se dará a más tardar en 2 semanas y se comunica de la siguiente forma: 

A través del correo electrónico indicado en la solicitud representada

La respuesta a la solicitud de revocación o limitación de divulgación de sus datos se dará a más tardar en 2 semanas y se comunicará de la siguiente forma:

A través del correo electrónico indicado en la solicitud representada 

de cambios en nuestro modelo de negocio, o par otras causas, por lo dual, nos comprometemos a mantenerlo informado sabre los cambios que pueda sufrir el presente aviso de privacidad, sin embargo, usted puede solicitar información sabre si el mismo ha sufrido algún cambio a través del siguiente correo electrónico:

veronica.mi0806@gmail.com

Ultima actualización:
15/11/2019                     </Text>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    labelBold:{
        fontWeight: 'bold',
        color: 'black',
    },
    
    texto:{
        flex: 1,
        fontSize: 12,
    },

});