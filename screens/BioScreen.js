import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {
  Body,
  Button,
  CheckBox,
  Container,
  Content,
  Form,
  Header,
  Item,
  Label,
  ListItem,
  InputGroup,
  Input,
  Text,
} from 'native-base';
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';
import DoubleButoon from './DoubleButton';

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
    const { navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor: "#222222"}}>
          <Content style={{paddingTop: 50}}>
            <Text style={{alignSelf: 'center', color:'#D4D4D4'}}>Profile Progress</Text>
            <Progress.Bar progress={0.8} width={300} style={{alignSelf: 'center'}} color='rgba(232, 36, 70, 1)' />
            <Text style={styles.messageText}> Tell us a little about yourself. </Text>
            {/* <InputGroup style={styles.inputBox} borderType="regular"> */}

            <Form style={{marginTop: 100}}>
            <Item >
              <Label>Type Bio...</Label>
              <Input
                onChangeText={(bio) => this.setState({bio})}
                value={this.state.bio}
                style={{color:'#D4D4D4'}}
              />
            </Item>
          </Form>

            <Text style={{
              alignSelf: 'center',
              marginTop: 50,
              marginBottom: 50,
              color:'#D4D4D4'
            }}> WHY DO WE ASK? </Text>

            <DoubleButoon
              text1={"DONE"}
              handleClick={() => this.props.navigation.navigate('Main')}
            />
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  messageText: {
    fontSize: 36,
    color: '#D4D4D4',
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
