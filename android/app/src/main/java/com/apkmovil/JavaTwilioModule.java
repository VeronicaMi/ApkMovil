package com.apkmovil;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import javax.annotation.Nonnull;

public class JavaTwilioModule extends ReactContextBaseJavaModule {


    private ReactContext mReactContext;
    private TwilioVideoConnector twilio;

    public JavaTwilioModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;
    }


    @Nonnull
    @Override
    public String getName() {
        return "JavaTwilio";
    }

    /**
     * Método de prueba del puente con react native.
     * @param errorCallback
     * @param successCallback
     */
    @ReactMethod
    public void sendMessage(String message, Callback errorCallback, Callback successCallback) {
        try {
            System.out.println(message);
            if (twilio != null) {
                twilio.sendMessage(message);
            }
            successCallback.invoke("Callback : Greetings from Java");
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void connectToRoom(String roomName, String accessToken, Promise promise) {
        twilio = new TwilioVideoConnector(getReactApplicationContext());
        try {
            twilio.connectToRoom(roomName, accessToken);
            promise.resolve(twilio.getRoom().getState().name()
                    + " en: " + twilio.getLocalDataTrack().getName()
                    + " estado: " + twilio.getLocalDataTrack().isEnabled());
        } catch (Exception e) {
            promise.reject("Error en la conexion con twilio", e);
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void disconnect(Callback errorCallback, Callback successCallback) {
        try {
            twilio.disconnectFromRoom();
            successCallback.invoke("Su conexión con el C4 ha terminado");
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }

}
