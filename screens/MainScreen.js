import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text, CardItem } from 'native-base';
import { StyleSheet, View, Image } from 'react-native'
export default class MainScreen extends Component {
  static navigationOptions = {
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor: "#222222"}}>
        <Content style={{paddingTop: 150}}>
          <Text style={{alignSelf: 'center', color:'#D4D4D4', fontSize: 36, fontWeight: 'bold', top: -115, left: -50}}>Mentor Topics</Text>
          <View
            style={{
              borderBottomColor: '#FEB51E',
              borderBottomWidth: 1,
              top: -100,
              left: 10,
              width: 350,
            }}
          />
          <CardItem
            style={styles.button1}
            button
            onPress={() => this.props.navigation.navigate('Mentor')}
          >
          <View style={{width: 60, height: 50, marginRight: 30, borderRightWidth: 1, borderRightColor: '#FEB51E'}}>
            <Image style={{height: 55, width: 55, left: -5}} source={require('../constants/HealthIcon1x.png')}/>
          </View>
          <View>
            <Text style={{fontSize: 20, color:'#D4D4D4'}}>Health Care</Text>
            <Text style={{fontSize: 15, color:'#D4D4D4', width: '40%'}}>You'll feel confident and secure navigating the U.S. healthcare system with a mentor by your side.</Text>
          </View>
          </CardItem>
          <CardItem
            style={styles.button2}
            button
          >
          <View style={{width: 60, height: 50, marginRight: 30, borderRightWidth: 1, borderRightColor: '#FEB51E'}}>
           <Image style={{height: 55, width: 55, left: -5, top: -5}} source={require('../constants/train_icon1x.png')}/>
          </View>
          <View>
            <Text style={{fontSize: 20, color:'#D4D4D4'}}>Transportation</Text>
            <Text style={{fontSize: 15, color:'#D4D4D4', width: '40%'}}>Getting around town is a breeze when our mentors show you the best route!</Text>
         </View>
          </CardItem>
          <CardItem
            style={styles.button3}
            button
          >
          <View style={{width: 60, height: 50, marginRight: 30, borderRightWidth: 1, borderRightColor: '#FEB51E'}}>
           <Image style={{height: 55, width: 55, left: -5, top: -7}} source={require('../constants/employment1x.png')}/>
          </View>
          <View>
            <Text style={{fontSize: 20, color:'#D4D4D4'}}>Career</Text>
            <Text style={{fontSize: 15, color:'#D4D4D4', width: '40%'}}>Opportunities are endless in the U.S. for top paying jobs. Find jobs from people you can trust.</Text>
          </View>
          </CardItem>
          <CardItem
            style={styles.button4}
            button
          >
          <View style={{width: 60, height: 50, marginRight: 30, borderRightWidth: 1, borderRightColor: '#FEB51E'}}>
             <Image style={{height: 75, width: 55, left: -5, top: -10}} source={require('../constants/Passport1x.png')}/>
          </View>
          <View>
            <Text style={{fontSize: 20, color:'#D4D4D4'}}>Documentation</Text>
            <Text style={{fontSize: 15, color:'#D4D4D4', width: '40%'}}> Mentors can walk you through identifying which documents you need.</Text>
          </View>
          </CardItem>
        </Content>
      </Container>
    );
  }
}

<Button
title="Go to Jane's profile"
onPress={() =>
  navigate('Profile', { name: 'Jane' })
}
/>

const styles = StyleSheet.create({
  button1: {
    height: 80,
    width:'100%',
    top: -20,
    backgroundColor: '#0e0e0e',
  },
  button2: {
    height: 80,
    width:'100%',
    top: 10,
    backgroundColor: '#0e0e0e',
  },
  button3: {
    height: 80,
    width:'100%',
    top: 50,
    backgroundColor: '#0e0e0e',
  },
  button4: {
    height: 90,
    width:'100%',
    top: 90,
    backgroundColor: '#0e0e0e',
  },
});

