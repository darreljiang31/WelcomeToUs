import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  Thumbnail,
  Textarea,
} from 'native-base';

export default class MentorProfileExample extends Component {

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
          <Content>
            <Text style={{alignSelf: 'flex-end'}}>5*</Text>
            <Thumbnail style={styles.thumbNail} large source={require('../assets/images/dentist1.jpeg')} />
            <Text style={styles.NameText}> Carla Zara, DDS </Text>
            <Text style={styles.bioText}> Dentist</Text>
            <Text style={styles.bioText}> Originally from Mexico City, Mexico </Text>
            <Text style={styles.bioText}> Lives in Creve Coeur, MO </Text>
            <Text style={styles.bioText}> Send a voice message </Text>
            <Text></Text>
            <Icon name="microphone" />
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  NameText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'rgb(42,42,42)',
    textAlign: 'center',
    width: 330,
    height: 93,
    left: 23,
    top: 80,
  },
  bioText: {
    fontSize: 24,
    color: 'rgb(42,42,42)',
    textAlign: 'left',
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
  thumbNail: {
    alignSelf: 'center'
  }
});
