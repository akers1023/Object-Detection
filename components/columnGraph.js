import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { useState } from "react";

function convertDateString(inputDate) {
  // Chia chuỗi thành các phần: ngày, tháng và năm
  const day = inputDate.substring(0, 2);
  const month = inputDate.substring(2, 4);
  const year = inputDate.substring(4, 8);

  // Chuyển đổi tháng từ số thành tên
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[parseInt(month, 10) - 1];

  // Tạo chuỗi định dạng "Month day, year"
  const formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
}

function ColumnGraph({ One, Two, Three, Percent, Rotten, Id }) {
  const total = One + Two + Three + Rotten;
  date = convertDateString(Id.toString());
  // console.log(date);
  return (
    <TouchableOpacity
      style={{
        position: "relative",
        alignItems: "center",
        height: 260,
        width: 370,
      }}
    >
      <View style={styles.table}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          <Text>{total}</Text>
          <Text>{parseInt((total * 75) / 100)}</Text>
          <Text>{parseInt((total * 50) / 100)}</Text>
          <Text>{parseInt((total * 25) / 100)}</Text>
          <Text>0</Text>
        </View>
        <View style={{ flex: 4 }}>
          <View style={styles.directionRowChart}>
            <View
              style={[
                styles.column,
                {
                  height: One && (One * 200) / total,
                  backgroundColor: "#FF5733",
                },
              ]}
            ></View>
            <View
              style={[
                styles.column,
                {
                  height: Two && (Two * 200) / total,
                  backgroundColor: "#FFA533",
                },
              ]}
            ></View>
            <View
              style={[
                styles.column,
                {
                  height: Three && (Three * 200) / total,
                  backgroundColor: "#FFD133",
                },
              ]}
            ></View>
            <View
              style={[
                styles.column,
                {
                  height: Rotten && (Rotten * 200) / total,
                  backgroundColor: "#006434",
                },
              ]}
            ></View>
          </View>
          <View style={styles.directionRowName}>
            <MaterialCommunityIcons
              name="roman-numeral-1"
              color={"black"}
              size={26}
            />
            <MaterialCommunityIcons
              name="roman-numeral-2"
              color={"black"}
              size={26}
            />
            <MaterialCommunityIcons
              name="roman-numeral-3"
              color={"black"}
              size={26}
            />
            <MaterialCommunityIcons
              name="ev-plug-type1"
              color={"black"}
              size={26}
            />
          </View>
        </View>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.label}> {Percent}%</Text>
          <Text>
            {total - Rotten}/{total}
          </Text>
          <Text> {date}</Text>

          <MaterialCommunityIcons
            name={Percent >= 50 ? "check-circle" : "alpha-x-circle"}
            color={Percent >= 50 ? "#F49D1A" : "#006434"}
            size={130}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ColumnGraph;

const styles = StyleSheet.create({
  column: {
    width: 40,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  table: {
    flexDirection: "row",
    flex: 1,
    height: 260,
    width: 370,
    borderRadius: 5,
    backgroundColor: "#E8EBB5",
    position: "absolute",
    marginVertical: 10,
  },
  directionRowChart: {
    flexDirection: "row",
    flex: 6,
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  directionRowName: {
    flexDirection: "row",
    flex: 1.1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  label: {
    fontSize: 60,
    fontWeight: "500",
    color: "#005249",
  },
});
