import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text, CardItem } from 'native-base';
import { StyleSheet, View } from 'react-native'
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
            <Text style={{color: '#D4D4D4'}}>IMG</Text>
          </View>
          <View>
            <Text style={{fontSize: 25, color:'#D4D4D4'}}>Housing</Text>
            <Text style={{fontSize: 15, color:'#D4D4D4', width: '75%'}}>Avoid camping. Get a house today!</Text>
          </View>
          </CardItem>
          <CardItem
            style={styles.button2}
            button
          >
          <View style={{width: 60, height: 50, marginRight: 30, borderRightWidth: 1, borderRightColor: '#FEB51E'}}>
            <Text style={{color: '#D4D4D4'}}>IMG</Text>
          </View>
          <View>
            <Text style={{fontSize: 25, color:'#D4D4D4'}}>Transportation</Text>
            <Text style={{fontSize: 15, color:'#D4D4D4', width: '75%'}}>Save 15% or more on auto insurance with Geico.</Text>
         </View>
          </CardItem>
          <CardItem
            style={styles.button3}
            button
          >
          <View style={{width: 60, height: 50, marginRight: 30, borderRightWidth: 1, borderRightColor: '#FEB51E'}}>
            <Text style={{color: '#D4D4D4'}}>IMG</Text>
          </View>
          <View>
            <Text style={{fontSize: 25, color:'#D4D4D4'}}>Career</Text>
            <Text style={{fontSize: 15, color:'#D4D4D4', width: '75%'}}>Connect with recruiters, preview your resume, and begin work as a professional.</Text>

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
    backgroundColor: '#0e0e0e',
  },
  button2: {
    height: 80,
    width:'100%',
    top:50,
    backgroundColor: '#0e0e0e',
  },
  button3: {
    height: 80,
    width:'100%',
    top:100,
    backgroundColor: '#0e0e0e',
  },
});

