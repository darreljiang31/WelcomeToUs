import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import { AppRegistry, View, StyleSheet, TextInput, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DoubleButton from './DoubleButton';
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';

export default class OpeningScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container
        style={{backgroundColor: "#222222"}}
      >

      <Button style={{height: '110%'}} onPress={() => this.props.navigation.navigate('LanguageSelection')}>
        <Image
          style={{height: '110%', width: '100%'}}
          source={require('../constants/OpeningScreen.png')}
          button

        />;
      </Button>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 50,
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
    color:'#D4D4D4'
  },
  input: {
    position: 'absolute',
    top: 140,
    height: 29,
    width:'100%',
  },
  button: {
    position: 'absolute',
    top: 200,
    width:'100%'
  },
});
