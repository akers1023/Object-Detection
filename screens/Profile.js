import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Auth } from "../components/config";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = ({ route, navigation }) => {
  const { userEmail } = route.params;
  const auth = Auth;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title2}>Grow Guardian</Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.table}>
          <Text style={styles.title}>Your Name</Text>
          <Text style={styles.text}>Nguyen Van A</Text>
        </View>
        <View style={styles.table}>
          <Text style={styles.title}>Your Email</Text>
          <Text style={styles.text}>{userEmail}</Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
          width: 300,
          height: 300,
        }}
      >
        <LottieView
          autoPlay
          style={styles.lottie}
          source={require("../assets/animations/Orange_Animate.json")}
          loop
        />
      </View>
      <Pressable
        style={styles.bottom}
        onPress={() => {
          auth.signOut();
          Alert.alert('Notification', 'Your account has been logged out, please log in again!', [
            { text: 'OK', onPress: () => navigation.navigate("Login") }
          ]);
        }}
      >
        <View style={styles.button}>
          <MaterialCommunityIcons name="logout" color={"black"} size={35} />
          <Text style={{ fontWeight: "bold" }}>Log out</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tableContainer: {
    marginTop: 10,
    height: 230,
    width: "80%",
    backgroundColor: "#33CC66",
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  table: {
    height: 90,
    width: "90%",
    backgroundColor: "#E8EBB5",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 20,
  },
  title: {
    color: "#919BB0",
    marginLeft: 20,
  },
  title2: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#008000",
  },
  text: {
    fontWeight: "bold",
    color: "black",
    marginLeft: 20,
  },
  lottie: {
    height: "120%",
    width: "120%",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    width: 190,
    height: 60,
    backgroundColor: "#00CC33",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottom: { flex: 1, alignItems: "center" },
});
