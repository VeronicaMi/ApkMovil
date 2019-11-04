# ApkMovilNau

Para levantar el proyecto:

1. Después de clonar el repositorio instalar las dependencias:

``$ npm install``

2. Conectar el dispositivo correr el comando:

```$ react-native run-android```

3. Cada vez que se corra el comando saldrán errores relativos a **react-nativemaps**:

    * ``> Task :react-native-maps:processDebugManifest FAILED``
    * ``> Task :react-native-maps:generateDebugBuildConfig FAILED``
    * ``> Task :react-native-maps:packageDebugResources FAILED``
    * ``> Task :react-native-maps:mergeDebugShaders FAILED``
    * ``> Task :react-native-maps:packageDebugAssets FAILED``
    *  ``> Task :react-native-maps:mergeDebugJniLibFolders FAILED``
 4. La siguiente vez el comando `react-native run-android` debe instalar correctamente la aplicación en el móvil.
