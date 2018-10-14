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
    return (
      <Container>
        <Header />
        <Content>
        <Text style={{alignSelf: 'center'}}>Profile Progress</Text>
        <Progress.Bar progress={.5} width={300} style={{alignSelf: 'center'}} />
          <Card style={{padding: 30}}>
            <CardItem button onPress={() => this.setState({language: "English"})}>
              <Text>Hello</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem button onPress={() => this.setState({language: "French"})}>
              <Text>Bonjour</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem button onPress={() => this.setState({language: "Spanish"})}>
              <Text>Hola</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem button onPress={() => this.setState({language: "Sanskrit"})}>
              <Text>Namaste</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem button onPress={() => this.setState({language: "Italian"})}>
              <Text>Ciao</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
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
