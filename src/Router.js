import React from 'react';
import {Text} from 'react-native';
import { Scene, Router, Actions, Drawer } from 'react-native-router-flux';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import { Icon } from 'react-native-elements';
import SettingsScreen from './screens/SettingsScreen';



const RouterComponent = () => {

    console.log(Actions.currentScene);

    return (
        <Router>
            <Scene key='root' gesturesEnabled={false} hideNavBar >

                <Scene key='auth'>

                    <Scene
                        hideNavBar
                        initial
                        key='LogIn'
                        component={SignInScreen}
                        title='Log In'
                    />
                    
                    <Scene
                        
                        back
                        key='SignUp'
                        component={SignUpScreen}

                    />
                    <Scene
                        hideNavBar={false}
                        key='Settings'
                        component={SettingsScreen}
                        title='' />
                    <Drawer
                        hideNavBar
                        key="drawerMenu"
                        contentComponent={SettingsScreen}
                        drawerWidth={300}
                        drawerIcon= {<Icon
                           
                            size={30}
                            name='cog'
                            type='font-awesome'
                            color='black'
                             />
                            }
    
                        drawerPosition="right"
                    >
                        <Scene
                            
                            key='Home'
                            tabs={true}>
                            <Scene  key='tab1' title='IN PROGRESS' component={HomeScreen} />

                            <Scene key='tab2' title='DONE' component={HomeScreen} />
                        </Scene>
                    </Drawer>
                </Scene>

            </Scene>

        </Router>
    );
};

export default RouterComponent;