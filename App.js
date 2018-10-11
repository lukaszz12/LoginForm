import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#455A64" barStyle="light-content"/>
        <Routes /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } 
});