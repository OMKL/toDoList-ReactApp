/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Input} from './src/components/Input';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        

      
      
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    marginTop: 30 ,
    
  },

});
