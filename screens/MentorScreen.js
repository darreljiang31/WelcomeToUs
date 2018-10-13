import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native'
export default class MentorScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    height: 100,
    position: 'absolute',
    width:'100%',
  },
  button2: {
    height: 100,
    position: 'absolute',
    width:'100%',
    top:150
  },
  button3: {
    height: 100,
    position: 'absolute',
    width:'100%',
    top:300
  },
});
