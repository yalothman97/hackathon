import React, { Component } from "react";
import { Text, View } from "react-native";
import BankCard from "./BankCard";

export default class BankList extends Component {
  render() {
    return (
      <View>
        <BankCard />
      </View>
    );
  }
}
