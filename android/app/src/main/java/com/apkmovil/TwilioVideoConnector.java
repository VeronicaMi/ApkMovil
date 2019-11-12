package com.apkmovil;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.twilio.video.ConnectOptions;
import com.twilio.video.LocalDataTrack;
import com.twilio.video.LocalParticipant;
import com.twilio.video.RemoteDataTrack;
import com.twilio.video.RemoteDataTrackPublication;
import com.twilio.video.RemoteParticipant;
import com.twilio.video.Room;
import com.twilio.video.TwilioException;
import com.twilio.video.Video;

import java.nio.ByteBuffer;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class TwilioVideoConnector extends AppCompatActivity {

    /*
     * A Room represents communication between a local participant and one or more participants.
     */
    private ReactContext context;
    private Room room;
    private LocalParticipant localParticipant = null;
    private LocalDataTrack localDataTrack = null;
    private boolean disconnectedFromOnDestroy;
    // Map used to map remote data tracks to remote participants
    private final Map<RemoteDataTrack, RemoteParticipant> dataTrackRemoteParticipantMap =
            new HashMap<>();

    private final String EVENT_PARTICIPANT_CONNECTED = "participantConnected";
    private final String EVENT_PARTICIPANT_DISCONNECTED = "participantDisconnected";
    private final String EVENT_MESSAGE_RECEIVED = "messageReceived";

    public TwilioVideoConnector(ReactContext mReactContext) {
        this.context = mReactContext;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        System.out.println("------------entro en metodo on create");

    }

    @Override
    protected void onDestroy() {
        /*
         * Always disconnect from the room before leaving the Activity to
         * ensure any memory allocated to the Room resource is freed.
         */
        if (room != null && room.getState() != Room.State.DISCONNECTED) {
            room.disconnect();
            disconnectedFromOnDestroy = true;
        }

        /*
         * Release the local audio and video tracks ensuring any memory allocated to audio
         * or video is freed.
         */
        if (localDataTrack != null) {
            localDataTrack.release();
            localDataTrack = null;
        }

        super.onDestroy();
    }

    /**
     * Room event listaener
     * @return
     */
    private Room.Listener roomListener(ReactContext context) {
        return new Room.Listener() {
            @Override
            public void onConnected(Room room) {
                localParticipant = room.getLocalParticipant();
                if (localParticipant != null) {
                    localParticipant.publishTrack(localDataTrack);
                    System.out.println("ME CONECTÉ A: " + room.getName()
                            + ", soy: " + localParticipant.getSid());
                }
            }

            @Override
            public void onReconnecting(@NonNull Room room, @NonNull TwilioException twilioException) {

            }

            @Override
            public void onReconnected(@NonNull Room room) {

            }

            @Override
            public void onConnectFailure(Room room, TwilioException e) {
                System.out.println("ERROR EN LA CONEXION");
            }

            @Override
            public void onDisconnected(Room room, TwilioException e) {
                localParticipant = null;

            }

            @Override
            public void onParticipantConnected(Room room, RemoteParticipant remoteParticipant) {
                System.out.println("ALGUIEN SE CONECTO: " + remoteParticipant.getIdentity()
                        + " con " + remoteParticipant.getRemoteDataTracks().size() + " data track(s)");
                for (final RemoteDataTrackPublication remoteDataTrackPublication :
                        remoteParticipant.getRemoteDataTracks()) {
                    System.out.println("Estoy suscrito?: " + remoteDataTrackPublication.isTrackSubscribed());
                    System.out.println("Está habilitado: " + remoteDataTrackPublication.isTrackEnabled());
                    if (remoteDataTrackPublication.isTrackSubscribed()) {
                        addRemoteDataTrack(remoteParticipant, remoteDataTrackPublication.getRemoteDataTrack());
                    }
                }
                WritableMap params = Arguments.createMap();
                params.putString("operador", remoteParticipant.getIdentity());
                sendEvent(context, EVENT_PARTICIPANT_CONNECTED, params);

            }

            @Override
            public void onParticipantDisconnected(Room room, RemoteParticipant remoteParticipant) {
            }

            @Override
            public void onRecordingStarted(Room room) {
            }

            @Override
            public void onRecordingStopped(Room room) {
            }
        };
    }

    private void sendEvent(ReactContext reactContext,
                                                 String eventName,
                                                 @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    public void connectToRoom(String roomName, String accessToken) {
        System.out.println("Token: " + accessToken);
        System.out.println("Room: " + roomName);

        // Create the local data track
        localDataTrack = LocalDataTrack.create(this.context);
        if (localDataTrack != null) {
            System.out.println("Se creo data track!!!!!!!!!!!");
        }

        ConnectOptions connectOptions = new ConnectOptions.Builder(accessToken)
                .roomName(roomName)
                .dataTracks(Collections.singletonList(localDataTrack))
                .build();

        room = Video.connect(this.context, connectOptions, roomListener(this.context));
    }

    public void disconnectFromRoom() {
        if (room != null) {
            room.disconnect();
        }
    }

    public Room getRoom() {
        return room;
    }

    public LocalDataTrack getLocalDataTrack() {
        return localDataTrack;
    }

    private void addRemoteDataTrack(RemoteParticipant remoteParticipant,
                                    RemoteDataTrack remoteDataTrack) {
        dataTrackRemoteParticipantMap.put(remoteDataTrack, remoteParticipant);
        remoteDataTrack.setListener(remoteDataTrackListener());
    }

    private RemoteDataTrack.Listener remoteDataTrackListener() {
        return new RemoteDataTrack.Listener() {
            @Override
            public void onMessage(RemoteDataTrack remoteDataTrack, ByteBuffer byteBuffer) {

            }

            @Override
            public void onMessage(RemoteDataTrack remoteDataTrack, String message) {
                System.out.println("onMessage: " + message);
                WritableMap params = Arguments.createMap();
                params.putString("message", message);
                sendEvent(context, EVENT_MESSAGE_RECEIVED, params);
            }
        };
    }

    public void sendMessage(String message) {
        if (localDataTrack != null) {
            localDataTrack.send(message);
        }
    }

}
