
import React, {Component} from 'react';
import { StyleSheet, Text,  View} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

export default class App extends Component {
  render() {
    return (
      
    <View style={styles.container}>
      <SignInScreen/>
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
