import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Title, Text, Icon, View, Button } from 'native-base';
import {Image, CameraRoll, ScrollView} from 'react-native'
import DoubleButton from './DoubleButton'
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';

export default class UploadPhotoScreen extends Component {
  constructor(props){
    super(props)

    this.state={
      photos:[],
    photo: null,
    placeholder: true
  }
  }
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 5,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({placeholder:false, photos: [
        require('../assets/images/pic2.jpg'),
        require('../assets/images/pic3.jpg'),
        require('../assets/images/pic4.jpg'),
        require('../assets/images/pic5.jpg')
      ] });
      })
      .catch((err) => {
         //Error Loading Images
      });
    };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor: "#222222"}}>
      <Content style={{paddingTop: 50}}>
        {/* <ProgressStatus progressPercentage={0.6} /> */}
        <Text style={{alignSelf: 'center', color:'#D4D4D4'}}>Profile Progress</Text>
        <Progress.Bar progress={0.6} width={300} style={{alignSelf: 'center'}} color='rgba(232, 36, 70, 1)'/>

        {/* <Content> */}
        <Text style={{fontSize: 35, alignSelf:'center',  fontFamily: 'HelveticaNeue-Light', backgroundColor: "#222222", top: 20, color:'#D4D4D4'}}> Upload your photo! </Text>
        {/* <Icon> */}
          {
            this.state.photo?
            <Image style={{alignSelf: 'center',             width: 200,
            height: 200, backgroundColor: "#222222", top: 50}} source={ this.state.photo}/>:
            this.state.placeholder?
            <Image style={{alignSelf: 'center',             width: 200,
            height: 200, backgroundColor: "#222222", top: 50}} source={require('../constants/Shape3x.png')}/>:
            null

          }

        {/* </Content> */}
        <ScrollView style={{top:30}}>
       {this.state.photos.map((p, i) => {
       return (
         <Button
         key={i}
         style={{
          width: 200,
          height: 200,
          alignSelf: 'center'
          }}
          onPress={() => {this.setState({photos:[], uri: p, photo: p})}}
          >
         <Image
           key={i}
           style={{
             width: 200,
             height: 200,
             alignSelf: 'center'
           }}
           source={this.state.photos[i]}
         />
         </Button>
       );
     })}
     </ScrollView>
        <View style={{top: 80}}>
          <DoubleButton
            text1="UPLOAD"
            handleClick={this._handleButtonPress}
            text2="CONTINUE"
            handleClick2={() => this.props.navigation.navigate('Bio')}
          />

        </View>

      </Content>

      </Container>
    );
  }
}
