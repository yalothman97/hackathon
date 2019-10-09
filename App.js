import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import AppContainer from "./Navigation/index";

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
