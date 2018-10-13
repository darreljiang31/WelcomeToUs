import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native'
export default class MainScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header />
        <Content>
          <Button style={styles.button1} iconLeft
            onPress={() => this.props.navigation.navigate('Mentor')}
          >
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

<Button
title="Go to Jane's profile"
onPress={() =>
  navigate('Profile', { name: 'Jane' })
}
/>

const styles = StyleSheet.create({
  button1: {
    height: 100,
    position: 'absolute',
    width:'80%',
  },
  button2: {
    height: 100,
    position: 'absolute',
    width:'80%',
    top:150
  },
  button3: {
    height: 100,
    position: 'absolute',
    width:'80%',
    top:300
  },
});

