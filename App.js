
import React, {Component} from 'react';
import { StyleSheet, Text,  View} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default class App extends Component {
  render() {
    return (
      
    <View style={styles.container}>
      <SettingsScreen />
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    
    
  },

});
