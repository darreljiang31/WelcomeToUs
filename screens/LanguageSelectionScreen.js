import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Right
} from 'native-base';
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';

export default class CardListExample extends Component {

  constructor(props) {
    super(props)

    this.state={
      language: "",
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={{backgroundColor: "#222222"}}>
        <Content style={{paddingTop: 150}}>
            <CardItem
              style={{alignSelf: 'center', marginBottom: 25, width: 300, backgroundColor: "#222222", borderBottomWidth: 2, borderBottomColor: '#FEB51E'}}
              button onPress={() =>{
              this.setState({language: "English"})
              this.props.navigation.navigate('Hello', {language: "English"})
              }}>
              <Icon name='ios-checkmark' style={{ fontSize: 60, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}/>
              <Text style={{alignSelf: 'center', fontSize: 36, textAlign: 'center', paddingLeft: 31, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}>
              Hello</Text>
             </CardItem>
             <CardItem
                style={{alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}}
                button onPress={() =>{
                this.setState({language: "French"})
                this.props.navigation.navigate('Hello', {language: "French"})
             }}>
              <Text style={{fontSize: 36, color: '#D4D4D4'}}>Bonjour</Text>
             >
             </CardItem>
             <CardItem
               style={{alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}}
               button onPress={() =>{
               this.setState({language: "Spanish"})
               this.props.navigation.navigate('Hello', {language: "Spanish"})
             }}>
              <Text style={{fontSize: 36, color: '#D4D4D4'}}>Hola</Text>

             </CardItem>
             <CardItem
               style={{alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}}
               button onPress={() =>{
               this.setState({language: "Sanskrit"})
               this.props.navigation.navigate('Hello', {language: "Sanskrit"})
             }}>
              <Text style={{fontSize: 36, color: '#D4D4D4'}}>Namaste</Text>

             </CardItem>
             <CardItem
               style={{alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}}
               button onPress={() =>{
               this.setState({language: "Italian"})
               this.props.navigation.navigate('Hello', {language: "Italian"})
             }}>
              <Text style={{fontSize: 36, color: '#D4D4D4'}}>Ciao</Text>

             </CardItem>
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
