import React, { Component } from 'react';
import { Text, StyleSheet,AsyncStorage, LayoutAnimation, View} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'; 
import { logOut } from '../actions';


class SettingsScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        LayoutAnimation.linear();
    }

    render() {
        return (

            <View style={styles.mainContainer}>
                <View style={styles.headerStyle}>
                    <Icon
                        reverse
                        name='cogs'
                        type='font-awesome'
                        color='#f50'
                    />
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Settings</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button
                        type="outline"
                        style={{ width: 180, marginTop: 19 }}
                        icon={
                            <Icon
                                name='user-circle'
                                type='font-awesome'
                                size={40}
                            />
                        }
                        title="   Edit Account"
                    />

                    <Button
                        type="outline"
                        style={{ width: 180, marginTop: 19 }}
                        icon={
                            <Icon
                                name='database'
                                type='font-awesome'
                                size={40}
                            />
                        }
                        title="   Reset Data"
                    />

                    <Button
                        
                        type="outline"
                        style={{ width: 180, marginTop: 19 }}
                        icon={
                            <Icon
                                name='sign-out'
                                type='font-awesome'
                                size={40}
                            />
                        }
                        title="  Sign Out"
                        onPress = {()=> { this.props.logOut(); AsyncStorage.setItem('Authentication', 'false')}}
                    />

                </View>

            </View>

        )
    }
}
export default connect (null, { logOut }) (SettingsScreen);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 40,

    },

    headerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomEndRadius: 1000,
        borderBottomStartRadius: 1000,
        

    },


});