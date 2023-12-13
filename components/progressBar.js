import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { child, onValue, push, ref, set, update } from "firebase/database";
import { db } from "./config";
import { format } from "date-fns";

function getCurrentDate() {
  const currentDate = new Date();
  const id_date = format(currentDate, "ddMMyyyy");
  return id_date;
}

const ProgressBar = () => {
  const id_date = getCurrentDate();
  const percent = "percent";
  const [valuePercent, setValuePercent] = useState(0);

  useState(() => {
    readPercent();
  }, []);

  function readPercent() {
    const realValue = ref(db, "list_date/" + id_date + "/" + percent);
    onValue(realValue, (snapshot) => {
      const data = snapshot.val();

      setValuePercent(data.valuePercent);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{valuePercent}%</Text>

      <View style={styles.progressBG}>
        <View
          style={[
            styles.progress,
            {
              width: `${valuePercent}%`,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  progressBG: {
    width: 250,
    height: 15,
    backgroundColor: "#E8DEF7",
    marginHorizontal: 25,
    borderRadius: 10,
  },

  progress: {
    width: "50%",
    height: 15,
    backgroundColor: "#E45604",
    borderRadius: 10,
  },

  label: {
    fontSize: 90,
    fontWeight: "500",
    color: "#005249",
    marginBottom: 5,
  },

  btn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#919EAB",
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 40,
  },

  btnText: {
    fontWeight: "500",
    color: "#fff",
  },

  btnBox: {
    flexDirection: "row",
  },
});
