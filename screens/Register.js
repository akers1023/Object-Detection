import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Auth } from "../components/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Logo from "../assets/svg/code/Logo";
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("mmmmmm@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [displayName, setUsername] = useState("Nguyen Van A");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const auth = Auth;
  const signUp = async () => {
    setLoading(true);
    try {
      if (password !== confirmPassword) {
        Alert.alert(
          "Something Wrong!",
          "Password and Confirm Password don't match",
          [{ text: "OK" }]
        );
        return;
      }
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      Alert.alert("Notification", "You have successfully registered!", [
        { text: "OK" },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Sign Up Failed", [{ text: "OK" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Logo
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        />
        <View style={styles.body}>
          <View style={[styles.input, { marginTop: 50 }]}>
            <MaterialCommunityIcons
              name="account-circle"
              color={"green"}
              size={30}
            />
            <TextInput
              value={displayName}
              style={{ marginLeft: 10, color: "#00CC33" }}
              placeholder="Your name"
              onChangeText={(text) => setUsername(text)}
            ></TextInput>
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons name="email" color={"green"} size={30} />
            <TextInput
              value={email}
              style={{ marginLeft: 10, color: "#00CC33" }}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons
              name="key-variant"
              color={"green"}
              size={30}
            />
            <TextInput
              value={password}
              secureTextEntry={true}
              style={{ marginLeft: 10, color: "#00CC33" }}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons
              name="shield-check"
              color={"green"}
              size={28}
            />
            <TextInput
              value={confirmPassword}
              secureTextEntry={true}
              style={{ marginLeft: 10, color: "#00CC33" }}
              placeholder="Confirm Password"
              onChangeText={(text) => setConfirmPassword(text)}
            ></TextInput>
          </View>
        </View>

        {loading ? (
          <View style={styles.buttonContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={signUp}>
              <Text style={{ color: "white", fontWeight: "500" }}>
                Register
              </Text>
            </Pressable>
            <Pressable
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={[styles.message, { color: "#1E232C" }]}>
                Already have an account?{" "}
              </Text>
              <Text
                style={[
                  styles.message,
                  { color: "#765827", fontWeight: "500" },
                ]}
              >
                Login Now
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  header: { flex: 1, justifyContent: "center" },
  body: {
    flex: 1.5,
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "green",
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: "green",
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
  message: {
    fontSize: 15,
    textAlign: "center",
    color: "red",
  },
  input: {
    alignItems: "center",
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#008000",
    height: 50,
    width: 300,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    elevation: 20,
  },
  buttonContainer: {
    flex: 1.5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "auto",
    marginBottom: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    flexDirection: "row",

    height: 50,
    width: "80%",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#00CC33",
    elevation: 20,
  },
  lottie: {
    height: "120%",
    width: "120%",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});
