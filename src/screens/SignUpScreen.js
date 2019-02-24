import React, { Component } from 'react';
import { Text, StyleSheet, LayoutAnimation, View, Image } from 'react-native';
import { Input } from '../components/Input';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'


export default class SignUpScreen extends Component {
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
                        raised
                        name='users'
                        type='font-awesome'
                        color='#f50'
                        />
                    <Text style={{ fontSize: 28, letterSpacing: 4, fontWeight: 'bold' }}>Sign Up</Text>
                </View>

                <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <Input
                        label='Email:'
                        placeholder='@gmail.com' />
                    <Input
                        label='Password:'
                        placeholder='***********'
                        secureTextEntry />

                    <Button
                        style={{ width: 300, marginTop: 30 }}
                        title='Register'


                    />
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'center',

    },

    headerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        //backgroundColor: 'red'

    },

});