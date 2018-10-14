import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text, List, ListItem, Left, Thumbnail, Body, Right, Card } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Dimensions, Platform, View  } from 'react-native'
import SliderEntry from './SliderEntry'

export default class MentorScreen extends Component {
  static navigationOptions = {
    title: 'Mentors',
  };

  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor: "#222222"}}>
      <Header style={{backgroundColor: "#222222", borderBottomWidth: 0}}>
       <Button primary style={{backgroundColor:'#FEB51E', width: 150, alignSelf: 'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate('MentorProfile')}>
       <Text style={{color:'#222222'}}>View Profile</Text>
       </Button>
      </Header>
        <Content style={{paddingTop: 50}}>
          {console.log(this._renderItem)}
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
          />
          <List style={{backgroundColor: '#D4D4D4'}}>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://footage.framepool.com/shotimg/qf/792533153-chin-finger-well-dressed-thinking.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Found an awesome home in . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{color: '#E82446'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://www.freegreatpicture.com/files/94/28299-business-people-stock.jpg' }} />
              </Left>
              <Body>
                <Text>Adeep</Text>
                <Text note numberOfLines={1}>Moving to this area, can someone help. .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{color: '#E82446'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://vignette.wikia.nocookie.net/creation/images/5/57/7-weird-stock-images-of-people-struggling-with-basic-cooking.jpg/revision/latest?cb=20160819222605' }} />
              </Left>
              <Body>
                <Text>Chen</Text>
                <Text note numberOfLines={1}>Good places to eat around . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{color: '#E82446'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://footage.framepool.com/shotimg/qf/115660054-presbyopia-bald-head-formal-wear-black-color.jpg' }} />
              </Left>
              <Body>
                <Text>Aaron</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{color: '#E82446'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://footage.framepool.com/shotimg/qf/792533153-chin-finger-well-dressed-thinking.jpg' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                   <Text style={{color: '#E82446'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const ENTRIES1 = [
  {
      title: 'Carla Zara',
      subtitle: 'Highly skilled at professional recommendations',
      illustration: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
      title: 'Penelope Cruz',
      subtitle: 'Has similar values as those in your profile',
      illustration: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
      title: 'Amari Zane',
      subtitle: 'Leader in religious circles',
      illustration: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
      title: 'Brady Smith',
      subtitle: 'Excited to help individuals of all backgrounds',
      illustration: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
      title: 'Juan Lopez',
      subtitle: 'Less than 10 miles from your location',
      illustration: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7ef5a79190207ccb44c7c2e101e13ed&auto=format&fit=crop&w=750&q=80%20750w'
  },
  {
      title: 'Jess Valencia',
      subtitle: 'Enthusiastic about spreading unique culture',
      illustration: 'https://images.unsplash.com/photo-1529932260967-af9d3bbd8138?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3e872d900875102bc21577a8f6f1345&auto=format&fit=crop&w=334&q=80 334w'
  }
];

const styles = StyleSheet.create({
  button1: {
    height: 100,
    position: 'absolute',
    width:'100%',
  },
  button2: {
    height: 100,
    position: 'absolute',
    width:'100%',
    top:150
  },
  button3: {
    height: 100,
    position: 'absolute',
    width:'100%',
    top:300
  },
});
