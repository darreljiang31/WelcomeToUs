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
  Right,
  View
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
              style={
                this.state.language === 'English'?
                {alignSelf: 'center', marginBottom: 25, width: 300, backgroundColor: 'rgba(0,0,0,0.0)', borderBottomWidth: 2, borderBottomColor: '#FEB51E'}:
                {alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}
              }
              button onPress={() =>{
              this.setState({language: "English"}, () =>{
              setTimeout(() => {this.props.navigation.navigate('WeNeedToGetToKnowYou', {language: "English"})},600);
              })
              }}>
              {
              this.state.language ==='English'?
                <Icon name='ios-checkmark' style={{ fontSize: 60, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}/> : null
                }
              {
                this.state.language === 'English'?
              <Text style={{alignSelf: 'center', fontSize: 36, textAlign: 'center', paddingLeft: 31, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}>Hello</Text>:
              <Text style={{fontSize: 36, color: '#D4D4D4'}}>Hello</Text>
              }

             </CardItem>
             <CardItem
              style={
                this.state.language === 'French'?
                {alignSelf: 'center', marginBottom: 25, width: 300, backgroundColor: 'rgba(0,0,0,0.0)', borderBottomWidth: 2, borderBottomColor: '#FEB51E'}:
                {alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}
              }                button onPress={() =>{
                this.setState({language: "French"},
                ()=> {setTimeout(() => {this.props.navigation.navigate('WeNeedToGetToKnowYou', {language: "French"})},600);}
              )
             }}>
             {
              this.state.language ==='French'?
                <Icon name='ios-checkmark' style={{ fontSize: 60, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}/> : null
                }
              {
                this.state.language === 'French'?
              <Text style={{alignSelf: 'center', fontSize: 36, textAlign: 'center', paddingLeft: 31, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}>Bonjour</Text>:
              <Text style={{fontSize: 36, color: '#D4D4D4'}}>Bonjour</Text>
              }
             </CardItem>
             <CardItem
              style={
                this.state.language === 'Spanish'?
                {alignSelf: 'center', marginBottom: 25, width: 300, backgroundColor: 'rgba(0,0,0,0.0)', borderBottomWidth: 2, borderBottomColor: '#FEB51E'}:
                {alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}
              }               button onPress={() =>{
               this.setState({language: "Spanish"},
               ()=> {setTimeout(() => {this.props.navigation.navigate('WeNeedToGetToKnowYou', {language: "Spanish"})},600); }
              )
             }}>
             {
              this.state.language ==='Spanish'?
                <Icon name='ios-checkmark' style={{ fontSize: 60, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}/> : null
                }
              {
                this.state.language === 'Spanish'?
              <Text style={{alignSelf: 'center', fontSize: 36, textAlign: 'center', paddingLeft: 31, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}>Hola</Text>:
              <Text style={{fontSize: 36, color: '#D4D4D4'}}>Hola</Text>
              }
             </CardItem>
             <CardItem
              style={
                this.state.language === 'Sanskrit'?
                {alignSelf: 'center', marginBottom: 25, width: 300, backgroundColor: 'rgba(0,0,0,0.0)', borderBottomWidth: 2, borderBottomColor: '#FEB51E'}:
                {alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}
              }               button onPress={() =>{
               this.setState({language: "Sanskrit"},
               ()=>{setTimeout(() => {this.props.navigation.navigate('WeNeedToGetToKnowYou', {language: "Sanskrit"})},600)}
              )
             }}>
              {
                this.state.language ==='Sanskrit'?
                  <Icon name='ios-checkmark' style={{ fontSize: 60, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}/> : null
                  }
                {
                  this.state.language === 'Sanskrit'?
                <Text style={{alignSelf: 'center', fontSize: 36, textAlign: 'center', paddingLeft: 31, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}>Namaste</Text>:
                <Text style={{fontSize: 36, color: '#D4D4D4'}}>Namaste</Text>
                }
             </CardItem>
             <CardItem
              style={
                this.state.language === 'Italian'?
                {alignSelf: 'center', marginBottom: 25, width: 300, backgroundColor: 'rgba(0,0,0,0.0)', borderBottomWidth: 2, borderBottomColor: '#FEB51E'}:
                {alignSelf: 'center', marginBottom: 25, width: 300, paddingLeft: 80, backgroundColor: 'rgba(0,0,0,0.0)'}
              }               button onPress={() =>{
               this.setState({language: "Italian"},
               ()=>{setTimeout(() => {this.props.navigation.navigate('WeNeedToGetToKnowYou', {language: "Italian"})},600)}
              )
             }}>
       {
        this.state.language ==='Italian'?
          <Icon name='ios-checkmark' style={{ fontSize: 60, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}/> : null
          }
        {
          this.state.language === 'Italian'?
        <Text style={{alignSelf: 'center', fontSize: 36, textAlign: 'center', paddingLeft: 31, color:'#D4D4D4', fontWeight: 'bold', marginBottom: -20}}>Ciao</Text>:
        <Text style={{fontSize: 36, color: '#D4D4D4'}}>Ciao</Text>
        }
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
