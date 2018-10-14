import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native'
export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'What do I need?',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header />
        <Content>
          <Button primary style={styles.button1} iconLeft
            onPress={() => this.props.navigation.navigate('Mentor')}
          >
            <Icon name='home' style={{fontSize: 40}}/>
            <Text style={{fontSize: 30}}>Housing</Text>
          </Button>
          <Button success style={styles.button2} iconLeft>
            <Icon name='train' style={{fontSize: 40}}/>
            <Text style={{fontSize: 30}}>Transportation</Text>
          </Button>
          <Button warning style={styles.button3} iconLeft>
            <Icon name='train' style={{fontSize: 40}}/>
            <Text style={{fontSize: 30}}>Money</Text>
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
    height: 80,
    width:'100%',
  },
  button2: {
    height: 80,
    width:'100%',
    top:50
  },
  button3: {
    height: 80,
    width:'100%',
    top:100
  },
});

