import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen'
import { Icon } from 'react-native-elements'
import SettingsScreen from './screens/SettingsScreen';



const RouterComponent = () => {

    console.log(Actions.currentScene);

    return (
        <Router>
            <Scene key='root' gesturesEnabled={false} hideNavBar >
            
                <Scene key='auth'>

                    <Scene
                        hideNavBar
                        drawerLockMode='locked-closed' 
                        //initial
                        key='LogIn'
                        component={SignInScreen}
                        title='Log In'
                        />

                    <Scene
                        key='SignUp'
                        component={SignUpScreen}
                        back
                    />

                </Scene>
                <Scene
                    hideNavBar = {false}
                    key='Settings'
                    component={SettingsScreen}
                    title='' />

                <Scene hideNavBar
                    initial
                    key='Home'
                    tabs={true}>
                <Scene  key='tab1' title='IN PROGRESS' hideNavBar  component={HomeScreen} />
                <Scene key='tab2' title='DONE' hideNavBar  component={HomeScreen} />
               
                </Scene>
            </Scene>

        </Router>
    );
};

export default RouterComponent;