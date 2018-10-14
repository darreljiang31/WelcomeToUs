import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import { AppRegistry, View, StyleSheet, TextInput } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DoubleButton from './DoubleButton';
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';

export default class ButtonThemeExample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container >
        <Header />
        <Text style={{alignSelf: 'center'}}>Profile Progress</Text>
        <Progress.Bar progress={0} width={300} style={{alignSelf: 'center'}} />
        <Content>
          <Text style={styles.text}>Hello! What's your name?</Text>

          <Form style={styles.input}>
            <Item >
              <Label>Name</Label>
              <Input
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
            </Item>
          </Form>


        </Content>
          <DoubleButton
            style={{top: 80}}
            text1="Continue"
            handleClick={() => this.props.navigation.navigate('WhereDoYouLive', {name: this.state.name})}
          />
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 30,
    height: 29,
    width: '100%',
    textAlign: 'center',
    fontSize:18
  },
  input: {
    position: 'absolute',
    top: 70,
    height: 29,
    width:'100%',
  },
  button: {
    position: 'absolute',
    top: 200,
    width:'100%'
  },
});
