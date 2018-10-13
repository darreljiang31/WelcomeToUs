import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Title, Text } from 'native-base';
import * as Progress from 'react-native-progress';
export default (props) => {
  const progressPercentage = props.progressPercentage;
  return (
    <Container style={{alignSelf: 'center', height:10}}>
      <Text style={{alignSelf: 'center'}}>Profile Progress</Text>
      <Progress.Bar progress={progressPercentage} width={300} />
    </Container>
  )
}
