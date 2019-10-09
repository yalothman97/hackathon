import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";
import { addPassport } from "../../redux/actions/passport";

class AddPassportForm extends Component {
  state = {
    name: "",
    number: "",
    expiration: "",
    dob: ""
  };

  handleChange = keyValue => {
    this.setState(keyValue);
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Name</Label>
              <Input
                value={this.state.name}
                onChangeText={name => this.handleChange({ name: name })}
              />
            </Item>
            <Item fixedLabel>
              <Label>Passport Number</Label>
              <Input
                value={this.state.number}
                onChangeText={number => this.handleChange({ number: number })}
              />
            </Item>
            <Item fixedLabel last>
              <Label>Expiration Date</Label>
              <Input
                value={this.state.expiration}
                onChangeText={expiration =>
                  this.handleChange({ expiration: expiration })
                }
              />
            </Item>
            <Item fixedLabel last>
              <Label>Date Of Birth</Label>
              <Input
                value={this.state.dob}
                onChangeText={dob => this.handleChange({ dob: dob })}
              />
            </Item>
            <Item>
              <Button
                onPress={() =>
                  this.props.addPassport(this.state, this.props.navigation)
                }
              >
                <Text>Add</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addPassport: (newPassport, navigation) =>
      dispatch(addPassport(newPassport, navigation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPassportForm);
