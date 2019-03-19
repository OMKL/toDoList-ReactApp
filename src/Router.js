import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';


const RouterComponent = ( ) => {

    return( 
        <Router>
            <Scene key='root' hideNavBar >
                <Scene key= 'auth'>

                    <Scene 
                    hideNavBar
                    key ='LogIn' 
                    component = {SignInScreen}
                    title = 'Log In'
                    initial/>

                    <Scene 
                    key ='SignUp' 
                    component = {SignUpScreen}
                    back
                    
                    />   

                </Scene>

            </Scene>
            
        </Router> 
    );
};

export default RouterComponent;