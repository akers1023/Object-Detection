import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Pressable,
  Alert
} from "react-native";
import React, { useState } from "react";
import { Auth } from "../components/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("AnManhGroup@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const auth = Auth;
  const signIn = async () => {
    setLoading(true);
    try {
      const resoponse = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = resoponse.user.email;
      console.log(userEmail);
      // alert("Successfully!");
      Alert.alert('Notification', 'Login Successful', [
        { text: 'OK', onPress: () => navigation.navigate("MyTabs", { userEmail }) }
      ]);
      
      // navigation.navigate("MyTabs", { userEmail });
    } catch (error) {
      console.log(error);
      // alert("Signing in failed: " + error.message);
      Alert.alert('Error', "Signing in failed: " + error.message, [
        { text: 'OK'}
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Grow Guardian</Text>
        </View>
        <View style={styles.body}>
          <View
            style={{
              alignSelf: "center",
              width: 200,
              height: 200,
            }}
          >
            <LottieView
              autoPlay
              style={styles.lottie}
              source={require("../assets/animations/Fruits_Animate.json")}
              loop
            />
          </View>
          <View style={[styles.input, { marginTop: 50 }]}>
            <MaterialCommunityIcons
              name="account-circle"
              color={"green"}
              size={30}
            />
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
        </View>

        {loading ? (
          <View style={styles.buttonContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={signIn}>
              <Text style={{ color: "white", fontWeight: "500" }}>Login</Text>
            </Pressable>
            {/* <Pressable style={styles.button} onPress={signUp}>
              <Text style={{ color: "white", fontWeight: "500" }}>
                Register
              </Text>
            </Pressable> */}
            <Pressable
              style={{ flexDirection: "row" }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={[styles.message, { color: "#1E232C", }]}>Do not have an account? </Text>
              <Text style={[styles.message, { fontWeight: "500", color: "#765827" }]}>
                Register Now!
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;

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
