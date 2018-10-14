import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Title, Text, Icon } from 'native-base';
import {Image} from 'react-native'
import DoubleButton from './DoubleButton'
import ProgressStatus from './ProgressStatus'
export default () => {
  return (
    <Container>

    <Header />
    <ProgressStatus progressPercentage={0.3}/>

    {/* <Content> */}
    <Text style={{fontSize: 35, alignSelf:'center',  fontFamily: 'HelveticaNeue-Light'}}> Upload your photo! </Text>
    {/* <Icon> */}
      <Image style={{alignSelf: 'center'}} source={require('../constants/baseline_account_circle_black_48pt_3x.png')}/>
    {/* </Content> */}
<DoubleButton text1="UPLOAD"/>
    </Container>
  )

}
