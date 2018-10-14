import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  CheckBox,
  Container,
  Content,
  Header,
  ListItem,
  Text,
  View,
} from 'native-base';
import * as Progress from 'react-native-progress';
import ProgressStatus from './ProgressStatus';
import DoubleButton from './DoubleButton'

export default class ButtonThemeExample extends Component {

  constructor(props) {
    super(props)

    this.state={
      workChecked: false,
      universityChecked: false,
      kidEducationChecked: false,
      healthcareChecked: false,
      familyChecked: false,
      foodChecked: false,
      beerChecked: false,
    }
  }

   toggleChecked(stateVariable) {
    return !stateVariable
  }

  render() {
    const { navigate } = this.props;
    return (
      <Container style={{backgroundColor: "#222222"}}>
          <Content style={{padding: 50}}>
            <Text style={{alignSelf: 'center', color:'#D4D4D4'}}>Profile Progress</Text>
            <Progress.Bar progress={0.4} width={300} style={{alignSelf: 'center'}} color='rgba(232, 36, 70, 1)'/>
            <Text style={styles.messageText}> What's bringing you here? </Text>
            <Container style={{backgroundColor: "#222222", top: 70}}>
              <ListItem>
                <CheckBox
                  color = '#FEB51E'
                  checked={this.state.workChecked ? this.state.workChecked : false}
                  onPress={() => this.setState({workChecked: this.toggleChecked(this.state.workChecked)})}
                />
                <Body>
                  <Text style={{color:'#D4D4D4'}}>Work/Employment</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  color = '#FEB51E'
                  checked={this.state.universityChecked ? this.state.universityChecked : false}
                  onPress={() => this.setState({universityChecked: this.toggleChecked(this.state.universityChecked)})}
                />
                <Body>
                  <Text style={{color:'#D4D4D4'}}>University/Employment</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  color = '#FEB51E'
                  checked={this.state.kidEducationChecked ? this.state.kidEducationChecked : false}
                  onPress={() => this.setState({kidEducationChecked: this.toggleChecked(this.state.kidEducationChecked)})}
                />
                <Body>
                  <Text style={{color:'#D4D4D4'}}>My Kid's Education</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  color = '#FEB51E'
                  checked={this.state.healthcareChecked ? this.state.healthcareChecked : false}
                  onPress={() => this.setState({healthcareChecked: this.toggleChecked(this.state.healthcareChecked)})}
                />
                <Body>
                  <Text style={{color:'#D4D4D4'}} >Healthcare</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  color = '#FEB51E'
                  checked={this.state.familyChecked ? this.state.familyChecked : false}
                  onPress={() => this.setState({familyChecked: this.toggleChecked(this.state.familyChecked)})}
                />
                <Body>
                  <Text style={{color:'#D4D4D4'}} >Family Lives Here</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  color = '#FEB51E'
                  checked={this.state.foodChecked ? this.state.foodChecked : false}
                  onPress={() => this.setState({foodChecked: this.toggleChecked(this.state.foodChecked)})}
                />
                <Body>
                  <Text style={{color:'#D4D4D4'}}>The Food!</Text>
                </Body>
              </ListItem>
              <ListItem style={{marginBottom: 20}}>
              <CheckBox
                  color = '#FEB51E'
                  checked={this.state.beerChecked ? this.state.beerChecked : false}
                  onPress={() => this.setState({beerChecked: this.toggleChecked(this.state.beerChecked)})}
                />
                <Body>
                  <Text style={{color:'#D4D4D4'}}>The Beer!</Text>
                </Body>
              </ListItem>
                <DoubleButton
                  text1="CONTINUE"
                  handleClick={() => this.props.navigation.navigate('UploadPhoto')}
                />
            </Container>
            {/* <View style={{alignSelf:"center", left: -35}}> */}
              {/* </View> */}
          </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  messageText: {
    fontSize: 36,
    color: '#D4D4D4',
    textAlign: 'center',
    //width: 330,
    //left: 23,
    top: 40,
  },
  formContainer: {
    top: 160
  },
});
