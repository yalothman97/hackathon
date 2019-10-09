import React, { Component } from "react";
import { Text, View } from "react-native";

export default class BankCard extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.card.name} </Text>
        <Text> {this.props.card.number} </Text>
        <Text> {this.props.card.expiration} </Text>
      </View>
    );
  }
}
