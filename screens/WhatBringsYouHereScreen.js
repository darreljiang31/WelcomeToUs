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
} from 'native-base';
import {ProgressStatus} from './ProgressStatus'


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
    return (
      <Container>
        <Header>
          <ProgressStatus progress={1} />
        </Header>
          <Content>
            <Text style={styles.messageText}> What's bringing you here? </Text>
            <Container style={styles.formContainer}>
              <ListItem>
                <CheckBox
                  checked={this.state.workChecked ? this.state.workChecked : false}
                  onPress={() => this.setState({workChecked: this.toggleChecked(this.state.workChecked)})}
                />
                <Body>
                  <Text>Work/Employment</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  checked={this.state.universityChecked ? this.state.universityChecked : false}
                  onPress={() => this.setState({universityChecked: this.toggleChecked(this.state.universityChecked)})}
                />
                <Body>
                  <Text>University/Employment</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  checked={this.state.kidEducationChecked ? this.state.kidEducationChecked : false}
                  onPress={() => this.setState({kidEducationChecked: this.toggleChecked(this.state.kidEducationChecked)})}
                />
                <Body>
                  <Text>My Kid's Education</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  checked={this.state.healthcareChecked ? this.state.healthcareChecked : false}
                  onPress={() => this.setState({healthcareChecked: this.toggleChecked(this.state.healthcareChecked)})}
                />
                <Body>
                  <Text>Healthcare</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  checked={this.state.familyChecked ? this.state.familyChecked : false}
                  onPress={() => this.setState({familyChecked: this.toggleChecked(this.state.familyChecked)})}
                />
                <Body>
                  <Text>Family Lives Here</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  checked={this.state.foodChecked ? this.state.foodChecked : false}
                  onPress={() => this.setState({foodChecked: this.toggleChecked(this.state.foodChecked)})}
                />
                <Body>
                  <Text>The Food!</Text>
                </Body>
              </ListItem>
              <ListItem>
              <CheckBox
                  checked={this.state.beerChecked ? this.state.beerChecked : false}
                  onPress={() => this.setState({beerChecked: this.toggleChecked(this.state.beerChecked)})}
                />
                <Body>
                  <Text>The Beer!</Text>
                </Body>
              </ListItem>
            </Container>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  messageText: {
    fontSize: 36,
    color: 'rgb(42,42,42)',
    textAlign: 'center',
    width: 330,
    height: 93,
    left: 23,
    top: 80,
  },
  formContainer: {
    left: 41,
    top: 110,
  }
});
