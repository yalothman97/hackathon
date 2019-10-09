import React from "react";
import { View, H1, Text, Button } from "native-base";

export default function Welcome(props) {
  return (
    <View>
      <Text>Welcome</Text>
      <Button onPress={() => props.navigation.navigate("HomeScreen")}>
        <Text>Enter</Text>
      </Button>
    </View>
  );
}
