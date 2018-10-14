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
      <Container style={{backgroundColor: "#222222"}}>
        <Content style={{paddingTop: 50}}>
        <Text style={{alignSelf: 'center', color:'#D4D4D4'}}>Profile Progress</Text>
        <Progress.Bar color='rgba(232, 36, 70, 1)' progress={0} width={300} style={{alignSelf: 'center'}}  />
          <Text style={styles.text}>Hello! What's your name?</Text>

          <Form style={styles.input}>
            <Item >
              <Label style={{color: '#D4D4D4'}}>Name</Label>
              <Input
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
            </Item>
          </Form>


        </Content>
          <DoubleButton
            style={{top: 80}}
            text1="CONTINUE"
            handleClick={() => this.props.navigation.navigate('WhereDoYouLive', {name: this.state.name})}
          />
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 50,
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
    color:'#D4D4D4'
  },
  input: {
    position: 'absolute',
    top: 140,
    height: 29,
    width:'100%',
  },
  button: {
    position: 'absolute',
    top: 200,
    width:'100%'
  },
});
