import React, { Component } from "react";
import { Text, View } from "react-native";

export default class PassportCard extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.passport.name} </Text>
        <Text> {this.props.passport.number} </Text>
        <Text> {this.props.passport.expiration} </Text>
      </View>
    );
  }
}
