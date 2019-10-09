import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { Button } from "native-base";

import PassportCard from "./PassportCard";
import { AddPassportForm } from "./AddPassportForm";

export class PassportList extends Component {
  render() {
    let passports = this.props.passports.map(passport => (
      <PassportCard passport={passport} />
    ));
    return (
      <View>
        {passports}
        <Button
          onPress={() =>
            this.props.navigation.navigate("AddPassportFormScreen")
          }
        >
          <Text>Add Passport</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  passports: state.rootPassport.passports
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassportList);
