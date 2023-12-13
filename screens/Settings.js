import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import ColumnGraph from "../components/columnGraph";

import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../components/config";
import { GetCurrentDate } from "./Home";

function Settings({ navigation }) {
  const id_date = GetCurrentDate();
  const [listData, setListData] = useState();
  var [color, setColor] = useState();
  var [state, setState] = useState();

  useEffect(() => {
    // Reference to the Firebase Realtime Database
    const dbRef = ref(db, "list_date");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object to an array
        const dataArray = Object.values(data);
        setListData(dataArray);
        setState(
          dataArray.filter((item) => {
            return item.id == id_date;
          })
        );
        setColor(1);
      }
    });
  }, []);

  console.log(state);
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#D2DE32" }}>
      <View style={styles.headers}>
        <View style={{}}>
          <View style={[styles.boxColor, { backgroundColor: "#FF5733" }]} />
          <Text>Type 1</Text>
        </View>
        <View style={{}}>
          <View style={[styles.boxColor, { backgroundColor: "#FFA533" }]} />
          <Text>Type 2</Text>
        </View>
        <View style={{}}>
          <View style={[styles.boxColor, { backgroundColor: "#FFD133" }]} />

          <Text>Type 2</Text>
        </View>
        <View style={{}}>
          <View style={[styles.boxColor, { backgroundColor: "#006434" }]} />
          <Text>Type 2</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            height: 40,
            width: 100,
            backgroundColor: color == 1 ? "#C2CF0C" : "#E8EBB5",
            borderColor: color == 1 ? "black" : "#005249",
            borderWidth: 0.5,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            var newdata = listData.filter((item) => {
              return item.id == id_date;
            });
            setState(newdata);
            setColor(1);
          }}
        >
          <Text
            style={{
              fontWeight: color == 1 ? "bold" : "normal",
              fontSize: color == 1 ? 15 : null,
            }}
          >
            Today
          </Text>
        </Pressable>
        <Pressable
          style={{
            height: 40,
            width: 100,
            backgroundColor: color == 2 ? "#C2CF0C" : "#E8EBB5",
            borderColor: color == 2 ? "black" : "#005249",
            borderWidth: 0.5,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            var newdata = listData.filter((item) => {
              return item.percent.valuePercent >= 50;
            });
            setState(newdata);
            setColor(2);
          }}
        >
          <Text
            style={{
              fontWeight: color == 2 ? "bold" : "normal",
              fontSize: color == 2 ? 15 : null,
            }}
          >
            Standard
          </Text>
        </Pressable>
        <Pressable
          style={{
            height: 40,
            width: 100,
            backgroundColor: color == 3 ? "#C2CF0C" : "#E8EBB5",
            borderColor: color == 3 ? "black" : "#005249",
            borderWidth: 0.5,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setState(listData);
            setColor(3);
          }}
        >
          <Text
            style={{
              fontWeight: color == 3 ? "bold" : "normal",
              fontSize: color == 3 ? 15 : null,
            }}
          >
            All
          </Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              height: "100%",
              width: "100%",
              marginBottom: 70,
            }}
          >
            {state?.map((item, index) => {
              return (
                <View
                  key={item.id}
                  style={{
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <ColumnGraph
                    One={item.fresh.One.valueOne}
                    Two={item.fresh.Two.valueTwo}
                    Three={item.fresh.Three.valueThree}
                    Percent={item.percent.valuePercent}
                    Rotten={item.rotten.valueRotten}
                    Id={item.id}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <Pressable
        style={styles.bottom}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.button}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            Back
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  boxColor: {
    borderWidth: 0.5,
    borderRadius: 5,
    height: 40,
    width: 40,
  },

  headers: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    width: 430,
    // backgroundColor: "#F49D1A",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  body: {
    flex: 5,
    height: "auto",
    width: "auto",

    alignItems: "center",
  },
  button: {
    width: 140,
    height: 60,
    backgroundColor: "#00CC33",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: { flex: 0.8, alignItems: "center", justifyContent: "center" },
});
