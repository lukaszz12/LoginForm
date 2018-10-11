import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {

  signup(){
    Actions.signup();
  }
  
  render() {
    return (
        <View style={styles.container}>
          <Logo />
          <Form type="Login"/>
          <View style={styles.signupTextContent}>
            <Text style={styles.signupText}>Do not have an account yet? </Text>
            <TouchableOpacity onPress={this.signup}>
              <Text style={styles.signupButton}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextContent: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },
  signupButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500'
  }
});