import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import { AppRegistry, View, StyleSheet, TextInput } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ButtonThemeExample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    return (
      <Container >
        <Header />
        <Content>
          <Text style={styles.text}>Hello! What's your name?</Text>

          <Form style={styles.input}>
            <Item >
              <Label>Name</Label>
              <Input
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
            </Item>
          </Form>

          <Button primary style={styles.button}><Text> OK </Text></Button>

        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 150,
    height: 29,
    width: '100%',
    textAlign: 'center',
    fontSize:18
  },
  input: {
    position: 'absolute',
    top: 200,
    height: 29,
    width:'100%',
  },
  button: {
    position: 'absolute',
    top: 300,
    width:'100%'
  },
});
