import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { Button } from "native-base";

import BankCard from "./BankCard";
import { AddCardForm } from "./AddCardForm";

export class BankList extends Component {
  render() {
    let cards = this.props.cards.map(card => <BankCard card={card} />);
    return (
      <View>
        {cards}
        <Button
          onPress={() => this.props.navigation.navigate("AddCardFormScreen")}
        >
          <Text>Add Card</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.rootBank.cards
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankList);
