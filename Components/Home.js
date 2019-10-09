import React from "react";
import { Container, Text, Button } from "native-base";

export default function Home(props) {
  return (
    <Container>
      <Text>Bank</Text>
      <Button onPress={() => props.navigation.navigate("BankListScreen")}>
        <Text>View</Text>
      </Button>
      <Text>Passports</Text>
      <Button onPress={() => props.navigation.navigate("PassportListScreen")}>
        <Text>View</Text>
      </Button>
    </Container>
  );
}
