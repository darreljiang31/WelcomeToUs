import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native'
export default class ButtonIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button style={styles.button1} iconLeft>
            <Icon name='home' />
            <Text>Housing</Text>
          </Button>
          <Button style={styles.button2} iconLeft>
            <Icon name='home' />
            <Text>Pub</Text>
          </Button>
          <Button style={styles.button3} iconLeft>
            <Icon name='home' />
            <Text>Settings</Text>
          </Button>
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

