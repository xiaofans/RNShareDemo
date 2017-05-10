/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloWorld from './App/HelloWorld'
import UseMyComponent from './App/MyComponent'
import FlexBoxLayout from './App/FlexBoxLayout'


import { StackNavigator } from 'react-navigation';
import HomeScreen from './App/navigation/HomeScreen'
import ChatScreen from './App/navigation/ChatScreen'


export default class RNShareDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNShareDemo', () => RNShareDemo);
//AppRegistry.registerComponent('RNShareDemo', () => HelloWorld);
//AppRegistry.registerComponent('RNShareDemo', () => UseMyComponent);

//AppRegistry.registerComponent('RNShareDemo', () => FlexBoxLayout);

//AppRegistry.registerComponent('RNShareDemo', () => SimpleApp);