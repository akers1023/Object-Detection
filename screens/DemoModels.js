import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../components/config";
import { onValue, ref } from "firebase/database";

import Apple from "../assets/svg/code/Apple";
import Mango from "../assets/svg/code/Mango";
import Mangosteen from "../assets/svg/code/Mangosteen";
import Orange from "../assets/svg/code/Orange";
import Pineapple from "../assets/svg/code/Pineapple";
import Tomato from "../assets/svg/code/Tomato";

const DemoModels = ({ navigation }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, "list_models");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const modelArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setModels(modelArray);
      }
    });
  }, []);

  const renderFruitComponent = (type) => {
    switch (type) {
      case "apple":
        return <Apple />;
      case "pineapple":
        return <Pineapple />;
      case "orange":
        return <Orange />;
      case "mango":
        return <Mango />;
      case "mangosteen":
        return <Mangosteen />;
      case "tomato":
        return <Tomato />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Demo Model</Text>
      </View>
      <ScrollView>
        {models?.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                flex: 1,
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("Camera", { item });
              }}
            >
              <View style={styles.table}>
                {renderFruitComponent(item.id)}
                <Text style={styles.text}>{`${item.id}`}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DemoModels;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
  table: {
    marginTop: 10,
    height: 210,
    width: 350,
    backgroundColor: "#E8EBB6",
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#008000",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#008000",
  },
  image: {
    height: 100,
    width: 100,
  },
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#008000",
  },
});
