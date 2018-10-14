import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default (props) => {

  const text1 = props.text1 || 'Button 1'
  const text2 = props.text2 || 'Button 2'
  const handleClick = props.handleClick
  const handleClick2 = props.handleClick2
    return (
      <Container>
        <Content >
          <Button
            style={{ backgroundColor:'#9b1ce0', width: '80%', alignSelf: 'center', justifyContent:'center'}}
            onPress={props.handleClick}
          ><Text>{text1}</Text></Button>
          { props.text2 ?
            <Button
              style={{ marginTop:35, backgroundColor:'#9b1ce0', width: '80%', alignSelf: 'center', justifyContent:'center'}}
              onPress={props.handleClick2}
              ><Text>{text2}</Text></Button>: null}
        </Content>
      </Container>
    );
}
