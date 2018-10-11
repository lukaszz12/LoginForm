import * as React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 40, height: 70}} source={require('../../assets/logo.png')} />
        <Text style={styles.logotext}>Welcome to my app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logotext: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)'
  }
})