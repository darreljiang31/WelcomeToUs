import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default (props) => {

  const text1 = props.text1 || 'Button 1'
  const text2 = props.text2 || 'Button 2'
  const handleClick = props.handleClick
  const handleClick2 = props.handleClick2
    return (
      <Container style={{backgroundColor: "#222222"}}>
        <Content >
          <Button
            style={{ backgroundColor:'#FEB51E', width: '80%', alignSelf: 'center', justifyContent:'center'}}
            onPress={props.handleClick}
          ><Text style={{color:'#222222'}}>{text1}</Text></Button>
          { props.text2 ?
            <Button
              style={{ marginTop:35, backgroundColor:'#FEB51E', width: '80%', alignSelf: 'center', justifyContent:'center'}}
              onPress={props.handleClick2}
              ><Text style={{color:'#222222'}}>{text2}</Text></Button>: null}
        </Content>
      </Container>
    );
}
