import * as React from 'react';
import { TextInput, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Email'
          placeholderTextColor='#FFFFFF'
          keyboardType='email-address'
          onSubmitEditing={() => this.password.focus()} />
        <TextInput 
          style={styles.input} 
          secureTextEntry={true}
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Password'
          placeholderTextColor='#FFFFFF'
          ref={(input) => this.password = input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 40,
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    backgroundColor: '#1C313A',
    borderRadius: 25,
    marginVertical: 10,
    height: 40,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF'
  }
})