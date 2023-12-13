import { StyleSheet, Text, View, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Auth } from "../components/config";

import React from "react";

const Feature = ({ navigation }) => {
  const auth = Auth;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Start identifying
      </Text>
      <Pressable style={styles.camera}>
        <MaterialCommunityIcons
          name="camera-iris"
          color={"gray"}
          size={60}
          onPress={() => {
            navigation.navigate("Camera");
          }}
        />
      </Pressable>
      <Pressable style={styles.camera}>
        <MaterialCommunityIcons
          name="upload"
          color={"gray"}
          size={60}
          onPress={() => {
            // alert("Coming soon!");
            navigation.navigate("Upload");
          }}
        />
      </Pressable>
      <Pressable
        style={{
          height: "auto",
          width: "auto",
          marginTop: 100,
        }}
        onPress={() => {
          auth.signOut();
          alert("Sign out successfully! Do you want to log in again?");
          navigation.navigate("Login");
        }}
      >
        <MaterialCommunityIcons name="logout" color={"gray"} size={30} />
      </Pressable>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    backgroundColor: "#D2DE32",
  },
  camera: {
    margin: 10,
    height: "30%",
    width: "80%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "gray",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
