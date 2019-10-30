# ApkMovilNau
APK Naucalpan

Checar la conexión del dispositivo 
  adb devices
 
Correr el apk con
  react-native run-android
  
 Si llegara a ocurrir algun problema hacer lo siguiente
    1. Compilar el proyecto en Android Studio
    2. Correr el proyecto en Android studio para instalarlo en el dispositivo 
    3. En la consola correr el comando 
          *** adb -s reverse <dispositivo> tcp:8081 tcp:8081
    4. Ejecutar el comando 
         react-native run-android
