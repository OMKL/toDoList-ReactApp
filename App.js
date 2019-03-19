
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import firebase from 'firebase';
import Router from './src/Router';
import ReduxThunk from 'redux-thunk';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';


export default class App extends Component {


  componentWillMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyD0Ewv74EG3sofgQVN2XsVIVPEMEm0HSVw",
      authDomain: "todolist-app-689fc.firebaseapp.com",
      databaseURL: "https://todolist-app-689fc.firebaseio.com",
      projectId: "todolist-app-689fc",
      storageBucket: "todolist-app-689fc.appspot.com",
      messagingSenderId: "192128780052"
    });
  }

  render() {
    return (
    <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <View style={styles.container}>
      <Router/>
    </View>
    </Provider>
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
