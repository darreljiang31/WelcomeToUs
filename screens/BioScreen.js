import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
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
      <Container>
        <Header />
          <Content>
            <Text style={{alignSelf: 'center'}}>Profile Progress</Text>
            <Progress.Bar progress={0.8} width={300} style={{alignSelf: 'center'}} color='rgba(232, 36, 70, 1)' />
            <Text style={styles.messageText}> Tell us a little about yourself. </Text>
            {/* <InputGroup style={styles.inputBox} borderType="regular"> */}

              <TextInput
              style={{
                marginTop: 100,
                backgroundColor: this.state.text,
                borderColor: '#000000',
                borderWidth: 1,
              width:300,
              height:250,
              alignSelf: 'center' }}
                      editable={true}
                       numberOfLines = {10}
                       onChangeText={(bio) => this.setState({bio})}
                       value={this.state.bio}
                       maxLength = {70}
              />
            {/* </InputGroup> */}
            <Text style={{
              alignSelf: 'center',
              marginTop: 25,
              marginBottom: 50,
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
