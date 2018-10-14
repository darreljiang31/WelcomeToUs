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
    const name = this.props.navigation.getParam('name', 'Not Yet Provided')
    return (
      <Container style={{backgroundColor: "#222222"}}>
        <Text>{name}</Text>
        <Content style={{paddingTop: 50}}>
            <Text style={{alignSelf: 'center', color:'#D4D4D4'}}>Profile Progress</Text>
            <Progress.Bar progress={0.2} width={300} style={{alignSelf: 'center'}} />
            <Text style={styles.messageText}> Where do you live? </Text>
            <Container style={{height: 170, backgroundColor: 'rgba(0,0,0,0.0)'}}>
              <Container style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                <Label style={{left: 30, backgroundColor: 'rgba(0,0,0,0.0)', color:'#D4D4D4'}}>City:</Label>
                  <Input
                    placeholder="City"
                    style={{top: -27, left: 110, borderWidth: .5, height: 30, backgroundColor: 'rgba(0,0,0,0.0)', borderColor: '#FEB51E', width: 225}}
                  />
              </Container>
              <Container style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                <Label style={{top: 5, left: 30, color:'#D4D4D4'}}>Zip Code:</Label>
                  <Input
                    placeholder="Zip Code"
                    style={{top: -19, left: 110, borderWidth: .5, height: 30, borderColor: '#FEB51E', width: 225}}
                  />
              </Container>
             <DoubleButton
              text1="CONTINUE"
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
    color:'#D4D4D4',
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
