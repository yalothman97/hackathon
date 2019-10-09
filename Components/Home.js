import React from "react";
import { Container, H1, Text, Button } from "native-base";

export default function Home(props) {
  return (
    <Container>
      <Text>Bank</Text>
      <Button onPress={() => props.navigation.navigate("BankListScreen")}>
        <Text>View</Text>
      </Button>
      <Text>IDs</Text>
      <Button onPress={() => props.navigation.navigate("IDsListScreen")}>
        <Text>View</Text>
      </Button>
    </Container>
  );
}
