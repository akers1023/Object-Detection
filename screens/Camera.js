import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image, Alert } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "../components/button";
import axios from "axios";
import * as FileSystem from "expo-file-system";

const OpenCamera = ({ route, navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const { item } = route.params;
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);

        if (data.uri) {
          // Read the image file asynchronously
          const imageBase64 = await FileSystem.readAsStringAsync(data.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setImage(data.uri);
          await axios({
            method: "POST",
            url: `https://detect.roboflow.com/${item.name}/${item.version}`,
            params: {
              api_key: "HNxCMS62l0Htt9visBGA",
            },
            data: imageBase64,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
            .then(function (response) {
              // Extract information from the response
              const prediction = response.data.predictions[0];

              const confidence = prediction.confidence;
              const classs = prediction.class;

              Alert.alert(
                "Response",
                `This is a ${classs}. The exact ratio is ${confidence}`,
                [{ text: "OK" }]
              );
              console.log(response.data);
            })
            .catch(function (error) {
              // alert(error.message);
              Alert.alert("Error", error.message, [{ text: "OK" }]);
              console.log(error.message);
            });
        } else {
          console.log("Invalid image URI");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        Alert.alert("Response", "Picture saved! 🎉", [
          {
            text: "OK",
            onPress: () => {
              setImage(null);
              console.log("saved successfully");
            },
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <Button
              title=""
              icon="repeat-variant"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <Button
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
              icon="flash"
              color={flash === Camera.Constants.FlashMode.off ? "gray" : "#fff"}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="repeat-variant"
            />
            <Button title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <Button title="Take a picture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
};
export default OpenCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});
