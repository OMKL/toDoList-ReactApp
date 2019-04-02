import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, USER_SUCCESSFULLY_SIGNEDUP, USER_SINGUP_FAIL, SIGN_OUT} from './type';

export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
            };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email, password}) => {

    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password )
        .then(user => { dispatch ({type: LOGIN_USER_SUCCESS, payload: user }).then(Actions.Home())})
        .catch((error) => {
            dispatch ({type: LOGIN_USER_FAIL, payload: error });
        });
        
    };
    
};

export const logOut = () => {
    return(dispatch) => {
        firebase.auth().signOut()
        .then(dispatch ({type: SIGN_OUT, payload: '' }))
        .then(Actions.reset('auth'))
        .catch((error)=>{
            dispatch ({type: LOGIN_USER_FAIL, payload: error });
        });
        
    };
};
    


export const signUpUser = ({email, password}) => {
    console.log(email+password);
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password )
        .then(user => { dispatch ({type: USER_SUCCESSFULLY_SIGNEDUP, payload: user }, Actions.pop())})
        .catch((error)=>{
            console.log(error);
            dispatch ({type: USER_SINGUP_FAIL, payload: error });
        });
        
    };
    
};