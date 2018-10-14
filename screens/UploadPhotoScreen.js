import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Title, Text, Icon, View } from 'native-base';
import {Image} from 'react-native'
import DoubleButton from './DoubleButton'
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';

export default class UploadPhotoScreen extends Component {

  render(){
    const { navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor: "#222222"}}>
      <Content style={{paddingTop: 50}}>
        {/* <ProgressStatus progressPercentage={0.6} /> */}
        <Text style={{alignSelf: 'center', color:'#D4D4D4'}}>Profile Progress</Text>
        <Progress.Bar progress={0.2} width={300} style={{alignSelf: 'center'}} />

        {/* <Content> */}
        <Text style={{fontSize: 35, alignSelf:'center',  fontFamily: 'HelveticaNeue-Light', backgroundColor: "#222222", top: 20, color:'#D4D4D4'}}> Upload your photo! </Text>
        {/* <Icon> */}
          <Image style={{alignSelf: 'center', backgroundColor: "#222222", top: 50}} source={require('../constants/Shape3x.png')}/>
        {/* </Content> */}
        <View style={{top: 80}}>
          <DoubleButton
            text1="UPLOAD"
            text2="CONTINUE"
            handleClick2={() => this.props.navigation.navigate('Bio')}
          />
        </View>
      </Content>

      </Container>
    );
  }
}
