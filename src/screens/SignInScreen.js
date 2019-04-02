import React, { Component } from 'react';
import { Text, StyleSheet, LayoutAnimation, View, Image } from 'react-native';
import { Input } from '../components/Input';
import { Button, Icon} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; 
import { emailChanged, passwordChanged, loginUser } from '../actions';



class SignInScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
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
        this.props.loginUser({email, password});
    }
    render() {
        
        return (
           
            <View  style={styles.mainContainer}>
                <View style={{ alignItems: 'flex-end', flex:0.1, margin: 12, justifyContent:'flex-start' }}>
                    <Button
                        style={{ width: 100 }}
                        title='Sign Up'
                        type= 'outline'
                        raised
                        onPress={() => Actions.SignUp()} />
                </View>

                <View style={styles.headerStyle}>
                    <Image
                    style= {{width: 100, height: 100}}
                    source={require('../images/ToDoList.png')}
                    />
                    <Text style={{ fontSize: 28, letterSpacing:4, fontWeight: 'bold' }}>To Do List</Text>
                </View>

                <View style = {{ flex: 0.5, alignItems: 'center'}}>
                    <Input
                        value = {this.props.email}
                        label='Email:'
                        placeholder='@gmail.com'
                        onChangeText = {this.onEmailChange.bind(this)} />
                    <Input
                        value= {this.props.password}
                        label='Password:'
                        placeholder='***********'
                        secureTextEntry
                        onChangeText = {this.onPasswordChange.bind(this)} />
                    
                    <Button
                        onPress = {this.onButtonPress.bind(this)}
                        iconRight
                        style={{ width: 300, marginTop: 19 }}
                        icon={
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                                size={30}
                            />
                        }
                        title= "   Sign In   "
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
export default connect (mapStateToProps, { emailChanged, passwordChanged, loginUser }) (SignInScreen);
    
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
        flex: 0.2,
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },

});