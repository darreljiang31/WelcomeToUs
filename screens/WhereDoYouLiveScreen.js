import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  CheckBox,
  Container,
  Content,
  Header,
  ListItem,
  InputGroup,
  Input,
  Text,
  Label,
} from 'native-base';
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';
import DoubleButton from './DoubleButton';


export default class ButtonThemeExample extends Component {

  constructor(props) {
    super(props)

    this.state={
      city: "",
      zipCode: "",
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container >
        <Header />
          <Content style={{height: 200}}>
            <Text style={{alignSelf: 'center'}}>Profile Progress</Text>
            <Progress.Bar progress={.5} width={300} style={{alignSelf: 'center'}} />
            <Text style={styles.messageText}> Where do you live? </Text>
            <Container style={{height: 170}}>
              <Container >
                <Label style={{left: 30}}>City:</Label>
                <InputGroup borderType="regular" style={{width: 255}} >
                  <Input
                    placeholder="City"
                    style={{top: -27, left: 80, borderWidth: .5, height: 30}}
                  />
                </InputGroup>
              </Container>
              <Container>
                <Label style={{top: 5, left: 30}}>Zip Code:</Label>
                <InputGroup borderType="regular" style={{width: 225}} >
                  <Input
                    placeholder="Zip Code"
                    style={{top: -19, left: 110, borderWidth: .5, height: 30}}
                  />
              </InputGroup>
              </Container>
             <DoubleButton
              text1="Continue"
              handleClick={() => navigate('WhatBringsYouHere')}
             />
            </Container>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  messageText: {
    fontSize: 36,
    color: 'rgb(42,42,42)',
    textAlign: 'center',
    width: 330,
    height: 150,
    left: 23,
    top: 80,
  },
  inputBox: {
    left: 41,
    top: 90,
    height: 70,
  },
});
