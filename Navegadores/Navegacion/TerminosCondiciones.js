import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class TerminosCondiciones extends Component{
    static navigationOptions = {
        title: 'Términos y Condiciones'
    }

    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Text style = {styles.textoTitulo}>Términos y Condiciones</Text>
                    <Text style = {styles.texto}>
Este contrato describe los términos y condiciones generales (en delante únicamente "TÉRMINOS Y CONDICIONES") aplicables al uso de los contenidos, productos y servicios ofrecidos a través de la aplicación móvil De corazón por Naucalpan (en adelante, " APP MÓVIL "), del cual es titular Verónica Miranda y Larry Jaguey (en adelante, "TITULAR') quien tiene su domicilio establecido en Ia Ciudad de México, en la siguiente dirección:

Av. Juan de Dios Bátiz sin esq. Av. Miguel Othón de Mendizábal. Colonia Lindavista. Alcaldía: Gustavo A. Madero. C. P. 07738. Ciudad de México.

Cualquier persona que desee acceder o hacer uso de la aplicación móvil o los servicios que en él se ofrecen, podrá hacerlo sujetándose a los presentes TERMINOS Y CONDICIONES, así coma a políticas y principios incorporados al presente documento. En todo caso, cualquier persona que no acepte los presentes términos y condiciones, deberá abstenerse de utilizar la aplicación móvil y o adquirir los productos y servicios
que en su caso sean ofrecidos.

I.DEL OBJETO.

El objeto de los presentes TERMINOS Y CONDICION ES es regular el acceso y la utilización de la APP MÓVIL, entendiendo por este cualquier tipo de contenido, producto o servicio que se encuentre a disposición del público en general dentro de la aplicación móvil: De corazón por Naucalpan.

El TITULAR se reserva Ia facultad de modificar en cualquier momento y sin previo aviso, la presentación, los contenidos, la funcionalidad, los productos, los servicios, y la configuración que pudiera estar contenida en la APP MÓVIL; en este sentido, el USUARIO reconoce y acepta que Veronica Miranda y Larry Jaguey en cualquier momento podrán interrumpir, desactivar o cancelar cualquiera de los elementos que conforman la APP MÓVIL o el acceso a los mismos.

El acceso a la APP MÓVIL por parte del USUARIO tiene carácter libre y, por regla general es gratuito sin que el USUARIO tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo referente al costo de la conexión a Internet suministrada por el proveedor de este tipo de servicios que hubiere contratado el mismo USUARIO.

El acceso a parte de los contenidos y servicios de la APP MÓVIL podrá realizarse previa suscripción o registro previo del USUARIO.

La APP MÓVIL se encuentra dirigida principalmente a personas que cuenten con Ia mayoría de edad (mayores de 18 años); en este sentido, Veronica Miranda y Larry Jaguey declina cualquier responsabilidad por el incumplimiento de este requisito.

La APP MÓVIL está dirigida exclusivamente a USUARIOS residentes en el municipio de Naucalpan de Juárez, por lo cual, Veronica Miranda y Larry Jaguey no asegura que la APP MÓVIL cumpla total o parcialmente con la legislación de otras ubicaciones, de forma que, si el USUARIO reside o tiene su domicilio establecido en otro estado y/o municipio y decide acceder o utilizar la APP MÓVIL lo hará bajo su propia responsabilidad y deberá asegurarse de que tal acceso y navegación cumple con Ia legislación local que le es aplicable, no asumiendo Verónica Miranda y Larry Jaguey ninguna responsabilidad que se pueda derivar de dicho acto.

Se hace del conocimiento del USUARIO que el TITULAR podrá administrar o gestionar la APP MÓVIL de manera directa o a través de un tercero lo cual no modifica en ningún sentido lo establecido en los presentes TERMINOS Y CONDICIONES.

II. DEL USUARIO.

El acceso o utilización de la APP MÓVIL, así como de los recursos habilitados para interactuar entre los USUARIOS, o entre el USUARIO y el TITULAR tales como medios para realizar publicaciones o comentarios, confiere Ia condición de USUARIO de la APP MÓVIL, por lo que quedara sujeto a los presentes TÉRMINOS Y CONDICION ES, así como a sus ulteriores modificaciones, sin perjuicio de la aplicación de la legislación aplicable, por tanto, se tendrán por aceptados desde el momento en el que se accede a la APP MÓVIL. Dada la relevancia de lo anterior, se recomienda al USUARIO revisar las actualizaciones que se realicen a los presentes TÉRMINOS Y CONDICIONES.

Es responsabilidad del USUARIO utilizar la APP MÓVIL de acuerdo con la forma en el que fue diseñado; en este sentido, queda prohibida la utilización de cualquier tipo que automatice la interacción o descarga de los contenidos o servicios proporcionados a través de la APP MÓVIL. Además, el USUARIO se compromete a utilizar la información, contenidos o servicios ofrecidos a través de la APP MÓVIL de manera licita, sin contravenir lo dispuesto en los presentes TÉRMINOS Y CONDICIONES, la moral o el orden público, y se abstendrá de realizar cualquier acto que pueda suponer una afectación a los derechos de terceros, o perjudique de algún modo el funcionamiento de la APP MÓVIL.

Así mismo, el usuario se compromete a proporcionar información licita y veraz en los formularios habilitados en la APP MÓVIL, en los cuales el usuario tenga que proporcionar ciertos datos o información para el acceso a algún contenido, producto o servicio ofrecido por la propia APP MÓVIL. En todo caso, el USUARIO notificara de forma inmediata al TITULAR acerca de cualquier hecho que permita suponer el uso indebido de la información registrada de dichos formularios, tales como, robo extravió o acceso no autorizado a cuentas y/o contraseñas, con el fin de proceder su inmediata cancelación.

Veronica Miranda y Larry Jaguey se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren la ley, el respeto a Ia dignidad de la persona, que sean discriminatorios, atenten contra los derechos de tercero o el orden público o bien, que a su juicio no resulten adecuados pare su publicación.

En cualquier caso, Veronica Miranda y Larry Jaguey no será responsable de las opiniones vertidas por los USUARIOS a través de comentarios o publicaciones que estos realicen.

El solo acceso a la APP MÓVIL no supone el establecimiento de ningún tipo de relación entre el TITULAR y el USUARIO.

Al tratarse de una APP MÓVIL dirigida principalmente a personas que cuenten con Ia mayoría de edad, USUARIO manifiesta ser mayor de edad y disponer de la capacidad jurídica necesaria para sujetarse a los presentes TERMINOS Y CONDICIONES.

III.DEL ACCESO Y NAVEGACION EN EL SITIO WEB.

El TITULAR no garantiza de ningún modo la continuidad y disponibilidad de los contenidos, productos o servicios ofrecidos a través de la APP MÓVIL, no obstante, el TITULAR llevara a cabo las acciones que de acuerdo con sus posibilidades le permitan rnantener el buen funcionamiento de la APP MÓVIL, sin que esto suponga alguna responsabilidad de parte de Veronica Miranda y Larry Jaguey.

De igual forma Veronica Miranda y Larry Jaguey no serán responsables ni garantiza que el contenido software al que pueda accederse a través de la APP MÓVIL se encuentre libre de errores, software malicioso, a que pueda causar algún daño a nivel de software o hardware en el equipo a través del cual el USUARIO accede a la APP MÓVIL.

El TITULAR tampoco se pace responsable de los daños que pudiesen ocasionarse por un uso inadecuado de la APP MÓVIL. En ningún caso Veronica Miranda y Larry Jaguey serán responsables por las pérdidas, danos o perjuicios de cualquier tipo que surjan por el solo acceso o utilización de la APP MÓVIL.

IV.POLITICA DE PRIVACIDAD Y PROTECCION DE DATOS.

De conformidad con lo establecido en la Ley Federal de Protección de Dates Personales en Posesión de Particulares, el TITULAR se compromete a adoptar las medidas necesarias que esters a su alcance para asegurar la privacidad de los datos personales recabados de forma que se garantice su seguridad, se evite su alteración, perdida o tratamiento no autorizado.

Adernas, a efecto de dar cumplimiento a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de Particulares, todo dato personal que sea recabado a través de la APP MÓVIL, será tratado de conformidad con los principios de licitud, calidad, finalidad, lealtad, y responsabilidad. Todo tratamiento de datos personales quedara sujeto al consentimiento de su titular. En todo caso, la utilización de datos financieros o patrimoniales, requerirán de autorización expresa de sus titulares, no obstante, esta podrá darse a través de la propia APP MÓVIL utilizando los mecanismos habilitados para tal efecto, y en todo caso se darán la mayor diligencia y cuidado a este tipo de datos. Lo mismo ocurrirá en el caso de datos personales sensibles, considerando por estos aquellos que debido a urea utilización indebida puedan dar origen a discriminación o su divulgación conlleve un riesgo para el titular.

En todo momento se procurará que los datos personales contenidos en las bases de datos o archivos que en su caso se utilicen, sean pertinentes, correctos y actualizados para los fines para los cuales fueron recabados.

El tratamiento de datos personales se limitará al cumplimiento de las finalidades previstas en el Aviso de Privacidad el cual se encontrara disponible dentro de la APP MÓVIL.

Veronica Miranda y Larry Jaguey se reserva el derecho a modificar su Política de Privacidad, de acuerdo con sus necesidades o derivado de algún cambia en Ia legislación. El acceso o utilización de la APP MÓVIL después de dichos cambios, implicara Ia aceptación de estos cambios.

Por otra parte, el acceso a la APP MÓVIL puede implicar la utilización de cookies, las cuales, son pequeñas cantidades de información que se almacenan en el navegador utilizado por el USUARIO. Las cookies facilitan la navegación, Ia hacen más amigable, y no dañan el dispositivo de navegación, para ello, pueden recabar información para ingresar a la APP MÓVIL, almacenar las preferencias del USUARIO, así coma la interacción que este tenga con la APP MÓVIL, corno por ejemplo: la fecha y hora en Ia que se accede a la APP MÓVIL, el tiempo que se ha hecho uso de este, los sitios visitados antes y después del mismo, el número de páginas visitadas, la dirección IP de la cual accede el usuario, la frecuencia de visitas, etc.
Este tipo de información será utilizada para mejorar la APP MÓVIL, detectar errores, y posibles necesidades que el USUARIO pueda tener, lo anterior a efecto de ofrecer a los USUARIOS servicios y contenidos de mejor calidad. En todo caso, Ia información que se recopile será anónima y no se identificará a usuarios individuales.

En caso de que el USUARIO no desee que se recopile este tipo de información deberá deshabilitar, rechazar, restringir y/o eliminar el uso de cookies en su dispositivo. Los procedimientos para realizar estas acciones pueden diferir de un dispositivo a otro; en consecuencia, se sugiere revisar las instrucciones facilitadas por el desarrollador del dispositivo. En el supuesto de que rechace el uso de cookies (total o parcialmente) el USUARIO podrá continuar hacienda uso de la APP MÓVIL, aunque podrían quedar deshabilitadas algunas de las funciones del mismo.

Es posible que en el futuro estas política respecto a las cookies cambien o se actualice, por ello es recomendable revisar las actualizaciones que se realicen a los presente TÉRMINOS Y CONDICIONES, con objetivo de estar adecuadamente informado sabre como y para que utilizamos las cookies que se generan al ingresar o hacer uso de la APP MÓVIL.

V.POLITICA DE ENLACES.

VI.POLITICA EN MATERIA DE FROPIEDAD INTELECTLIAL E INDUSTRIAL.

Veronica Miranda y Larry Jaguey por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de la APP MÓVIL, entendiendo por este el código fuente que hace posible su funcionamiento así corno las imágenes, archivos de audio o video, logotipos, marcas, combinaciones de colores, estructuras, diseños y demás elementos que Io distinguen.  Serán, por consiguiente, protegidas
por Ia legislación mexicana en materia de propiedad intelectual e industrial, así como por los tratados internacionales aplicables. Por consiguiente, queda expresamente prohibida la reproducción, distribución, o difusión de los contenidos de la APP MÓVIL, con fines comerciales, en cualquier soporte y por cualquier medio, sin la autorización de Veronica Miranda y Larry Jaguey.

El USUARIO se compromete a respetar los derechos de propiedad intelectual e industrial del TITULAR. No obstante, además de poder visualizar los elementos de la APP MÓVIL podrá imprimirlos, copiarlos o almacenarlos, siempre y cuando sea exclusivamente para su uso estrictamente personal.

Por otro lado, el USUARIO, se abstendrá de suprimir, alterar, o manipular cualquier elemento, archivo, o contenido, de la APP MÓVIL, y por ningún motivo realizará actos tendientes a vulnerar la seguridad, los archivos o bases de datos que se encuentren protegidos, ya sea a través de un acceso restringido mediante un usuario y contraseña, a porque no cuente con los permisos para visualizarlos, editarlos o manipularlos.

En caso de que el USUARIO o alguien tercero consideren que cualquiera de los contenidos de la APP MÓVIL suponga una violación de los derechos de protección de Ia propiedad industrial o intelectual, deberá
comunicarlo inmediatamente a Veronica Miranda y Larry Jaguey a través de los datos de contacto disponibles en la propia APP MÓVIL y/o a través de los siguientes medios:

Teléfono: 55 2898 0930
Correo electrónico: veronica.mi0806@gmail.com

VII.LEGISLACION YJURISDICCION APLICABLE.

Veronica Miranda y Larry Jaguey se reserva la facultad de presentar las acciones civiles o penales que considera necesarias por la utilización indebida de la APP MÓVIL, sus contenidos, productos o servicios, o por el incumplimiento de los presentes TÉRMINOS Y CONDICIONES.

La relación entre el USUARIO y Veronica Miranda y Larry Jaguey se regirá por Ia legislación vigente en México, específicamente en Ia Ciudad de México. De surgir cualquier controversia en relación a Ia interpretación y/o a la aplicación de los presentes TÉRMINOS Y CONDICIONES, las cuales se someter6n a la jurisdicción ordinaria de los tribunales que corresponderá conforme a derecho en el estado al que se hace referencia.
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textoTitulo:{
        flex: 1,
        fontSize: 16,
    },
    texto:{
        flex: 1,
        fontSize: 12,
    },

});
