import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Title, Text } from 'native-base';
import DoubleButton from './DoubleButton'
export default class WeNeedToGetToKnowYou extends React.Component {

 static navigationOptions = {
   header: null,
 }

 render() {
  const { navigate } = this.props.navigation;
  const language = this.props.navigation.getParam('language')
   return (
     <Container>
     <Header/>
     <Content>
       <Text
       style={{ fontFamily: 'HelveticaNeue-Light', fontSize: 32, width: 250, alignSelf:'center', textAlign: 'center', marginTop: 80}}
       >
We need to get to know you.
       </Text>
       <Text style={{marginTop:100,  alignSelf:'center', textAlign: 'center', fontSize: 15, width: 240, color: '#9b1ce0'}}>
         Do you have time to give me a little information?
       </Text>
     </Content>
     <DoubleButton
      text1='YES'
      text2='NOT RIGHT NOW'
      handleClick={() => this.props.navigation.navigate('Hello')}
      handleClick2={() => this.props.navigation.navigate('Main')}
     />
   </Container>
   )
 }
}
