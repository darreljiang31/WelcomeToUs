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
  View,
} from 'native-base';
import DoubleButton from './DoubleButton';

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
      <Container style={{backgroundColor: "#222222"}}>
        <Content style={{paddingTop: 50}}>
        <Text style={{alignSelf: 'flex-end', color:'#D4D4D4', fontSize: 30}}>✰✰✰✰</Text>
            <Thumbnail style={styles.thumbNail} large source={require('../constants/Shape3x.png')} />
            <Text style={styles.NameText}>Jackie Chan </Text>
            <Text style={styles.bioText}>Ninja</Text>
            <Text style={styles.bioText}>Originally from Hong Kong, China </Text>
            <Text style={styles.bioText}>Lives in St. Charles, MO </Text>
            <View style={{top: 110}}>
              <DoubleButton
                text1='Edit Profile'
                handleClick={() => this.props.navigation.navigate("LanguageSelection")}
              />
            </View>
            <Text></Text>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  NameText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#D4D4D4',
    textAlign: 'center',
    width: 330,
    height: 93,
    left: 23,
    top: 40,
  },
  bioText: {
    fontSize: 24,
    color: '#D4D4D4',
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
