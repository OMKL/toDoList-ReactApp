import React, { Component } from 'react';
import { Text, StyleSheet, LayoutAnimation, View, Image } from 'react-native';
import { Input } from '../components/Input';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; 
import { emailChanged, passwordChanged, signUpUser } from '../actions';

class SignUpScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        LayoutAnimation.spring();
    }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.signUpUser({email,password});
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
                        value ={this.props.email}
                        label='Email:'
                        placeholder='@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)} />
                    <Input
                        value ={this.props.password}
                        label='Password:'
                        placeholder='***********'
                        secureTextEntry 
                        onChangeText={this.onPasswordChange.bind(this)}/>

                    <Button
                        onPress= {this.onButtonPress.bind(this)}
                        style={{ width: 300, marginTop: 30 }}
                        title='Register'
                        

                    />
                </View>
{this.props.error ? <Text>{this.props.error}</Text> : null}
            </View>

        )
    }
}
const mapStateToProps = state =>{
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    };
};
export default connect (mapStateToProps, { emailChanged, passwordChanged, signUpUser }) (SignUpScreen);

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

    },

});