import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Store
import store from "./redux";
import { Provider } from "react-redux";

// Components
import AppContainer from "./Navigation/index";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
