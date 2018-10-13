import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Title, Text } from 'native-base';


export default class NumberOfChildrenScreen extends React.Component {
 static navigationOptions = {
   header: null,
 }

 render() {
   return (
     <Container>
     <Header/>
     <Content>
       <Text
       style={{ fontFamily: 'HelveticaNeue-Light', fontSize: 48}}
       >
      How many children do you have?

       </Text>
       <Item style={{ width: '26.7%', alignSelf: 'center', justifyContent:'center'}}>
         <Input/>
       </Item>
     </Content>
   </Container>
   )
 }
}
