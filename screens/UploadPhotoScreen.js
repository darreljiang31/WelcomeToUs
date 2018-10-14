import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Title, Text, Icon } from 'native-base';
import {Image} from 'react-native'
import DoubleButton from './DoubleButton'
import ProgressStatus from './ProgressStatus'

export default class UploadPhotoScreen extends Component {

  render(){
    const { navigate } = this.props.navigation;
    return (
      <Container>

      <Header />
      <ProgressStatus progressPercentage={0.6}/>

      {/* <Content> */}
      <Text style={{ marginTop: -400, fontSize: 35, alignSelf:'center',  fontFamily: 'HelveticaNeue-Light'}}> Upload your photo! </Text>
      {/* <Icon> */}
        <Image style={{alignSelf: 'center'}} source={require('../constants/baseline_account_circle_black_48pt_3x.png')}/>
      {/* </Content> */}
  <DoubleButton
    text1="UPLOAD"
    text2="Continue"
    handleClick2={() => this.props.navigation.navigate('Bio')}
  />
      </Container>
    )
  }

}
