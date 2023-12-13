import React, { Component } from "react";
import { View, Text } from "react-native";

class CurrentDate extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });
    }, 1000); // Cập nhật mỗi giây
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatDate(date) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
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

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${day}, ${year}`;
  }

  render() {
    const { currentDate } = this.state;
    const formattedDate = this.formatDate(currentDate);

    return (
      <View>
        <Text>{formattedDate}</Text>
      </View>
    );
  }
}

export default CurrentDate;
