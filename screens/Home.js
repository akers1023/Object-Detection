import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, Alert } from "react-native";
import { child, onValue, ref } from "firebase/database";
import { db } from "../components/config";
import { UseOrCreateData } from "../components/useOrCreate";
import { Auth } from "../components/config";

import ProgressBar from "../components/progressBar";
import CurrentDate from "../components/realTimeClock";
import Logo from "../assets/svg/code/Logo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { format } from "date-fns";

export function GetCurrentDate() {
  const currentDate = new Date();
  const id_date = format(currentDate, "ddMMyyyy");
  UseOrCreateData(id_date);
  return id_date;
}

function Home({ navigation }) {
  const id_date = GetCurrentDate();
  const typeone = "One";
  const typetwo = "Two";
  const typethree = "Three";
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");

  const rotten = "rotten";
  const [valueRotten, setValueRotten] = useState("");
  const auth = Auth;
  useState(() => {
    readOne();
  }, []);
  function readOne() {
    const realValue = ref(db, "list_date/" + id_date + "/fresh/" + typeone);
    onValue(realValue, (snapshot) => {
      const data = snapshot.val();

      setValueOne(data.valueOne);
    });
  }

  useState(() => {
    readTwo();
  }, []);

  function readTwo() {
    const realValue = ref(db, "list_date/" + id_date + "/fresh/" + typetwo);
    onValue(realValue, (snapshot) => {
      const data = snapshot.val();

      setValueTwo(data.valueTwo);
    });
  }

  useState(() => {
    readThree();
  }, []);

  function readThree() {
    const realValue = ref(db, "list_date/" + id_date + "/fresh/" + typethree);
    onValue(realValue, (snapshot) => {
      const data = snapshot.val();

      setValueThree(data.valueThree);
    });
  }

  useState(() => {
    readRotten();
  }, []);

  function readRotten() {
    const realValue = ref(db, "list_date/" + id_date + "/" + rotten);
    onValue(realValue, (snapshot) => {
      const data = snapshot.val();
      setValueRotten(data.valueRotten);
    });
  }

  return (
    <SafeAreaView>
      <View style={[styles.screen, { paddingTop: 20 }]}>
        <View
          style={{
            height: 270,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 20
          }}
        >
          <Pressable
            onPress={() => {
              auth.signOut();
              // alert("Sign out successfully! Do you want to log in again?");
              Alert.alert('Notification', 'Your account has been logged out, please log in again!', [
                { text: 'OK', onPress: () => navigation.navigate("Login") }
              ]);
              // navigation.navigate("Login");
            }}
          >
            <MaterialCommunityIcons name="logout" color={"black"} size={35} />
          </Pressable>
          <Logo
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          />
          <Pressable
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <MaterialCommunityIcons
              name="dots-vertical"
              color={"black"}
              size={35}
            />
          </Pressable>
        </View>
        <View style={styles.table}>
          <View style={styles.date}>
            <Text style={{ fontWeight: "500" }}>
              <CurrentDate />
            </Text>
          </View>
          <ProgressBar />
          <View style={styles.tableView}>
            <MaterialCommunityIcons
              name="roman-numeral-1"
              color={"black"}
              size={35}
            />
            <Text style={styles.button}>{valueOne}</Text>
          </View>
          <View style={styles.tableView}>
            <MaterialCommunityIcons
              name="roman-numeral-2"
              color={"black"}
              size={35}
            />
            <Text style={styles.button}>{valueTwo}</Text>
          </View>
          <View style={styles.tableView}>
            <MaterialCommunityIcons
              name="roman-numeral-3"
              color={"black"}
              size={35}
            />
            <Text style={styles.button}>{valueThree}</Text>
          </View>
          <View style={styles.tableView}>
            <MaterialCommunityIcons
              name="ev-plug-type1"
              color={"black"}
              size={35}
            />
            <Text style={styles.button}>{valueRotten}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  date: {
    width: 225,
    height: 31,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    backgroundColor: "white",
    alignSelf: "center",
    elevation: 10,
  },
  tableView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 31,
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 12,
    marginHorizontal: 10,
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
  },
  table: {
    marginBottom: 60,
    width: 310,
    height: 400,
    borderRadius: 30,
    backgroundColor: "#D2DE32",
    marginVertical: "center",
    alignItems: "center",
    elevation: 20,
  },
});
