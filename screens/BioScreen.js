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
} from 'native-base';
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus'

export default class ButtonThemeExample extends Component {

  constructor(props) {
    super(props)

    this.state={
      bio: "",
    }
  }

   toggleChecked(stateVariable) {
    return !stateVariable
  }

  render() {
    return (
      <Container>
        <Header />
          <Content>
            <Text style={{alignSelf: 'center'}}>Profile Progress</Text>
            <Progress.Bar progress={.5} width={300} style={{alignSelf: 'center'}} />
            <Text style={styles.messageText}> Tell us a little about yourself. </Text>
            <InputGroup style={styles.inputBox} borderType="regular">
              <Input />
            </InputGroup>
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
    height: 93,
    left: 23,
    top: 80,
  },
  inputBox: {
    left: 41,
    top: 110,
    borderWidth: 5,
    borderColor: 'rgb(42,42,42)',
    height: 50,
  },
});
