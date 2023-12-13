import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Button = ({ title, onPress, icon, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons
        name={icon}
        color={color ? color : "#f1f1f1"}
        size={28}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
  },
});
