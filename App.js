
import React, {Component} from 'react';
import { StyleSheet, AsyncStorage,StatusBar, Keyboard, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import Router from './src/Router';
import ReduxThunk from 'redux-thunk';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';




var Datastore = require('react-native-local-mongodb'), 
  db = new Datastore({ filename: 'authentication', autoload: true });
 
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
    db.find({}, function (err, docs) {
      // docs is an array containing documents Mars, Earth, Jupiter
      console.log(docs[2]);
      // If no document is found, docs is equal to []
  });

console.log(db.value);
    
    StatusBar.setBarStyle('light-content', true);
    return (
    <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <KeyboardAvoidingView onStartShouldSetResponder = {() => Keyboard.dismiss() } style={styles.container} behavior="padding" enabled>
    <Router/>
    </KeyboardAvoidingView>
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
