import React, { Component } from 'react';
import { Text, StyleSheet, LayoutAnimation, AsyncStorage, View, Image } from 'react-native';
import { Input } from '../components/Input';
import { Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import ImgToBase64 from 'react-native-image-base64';


var Datastore = require('react-native-local-mongodb'),
    db = new Datastore({ filename: 'authentication', autoload: true });

class SignInScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            convertedImage: '',
          };
    }

    componentWillMount() {
        LayoutAnimation.spring();

    }

    componentDidMount() {
        // db.find({}, function (err, docs) {
        //     // docs is an array containing documents Mars, Earth, Jupiter


        //     if( docs[0].signedIn === true){
        //         const email = docs[0].username;
        //         const password = docs[0].password;
        //         Actions.Home();

        //     } else
        //         return null;
        //     // If no document is found, docs is equal to []
        // });
        // AsyncStorage.getItem('Authentication').then(result => {
        //     if (result === 'true') {
        //         Actions.Home();
        //     } else
        //         return null;
        // });
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }



    async onButtonPress() {



        const { email, password } = this.props;
        this.props.loginUser({ email, password });
        AsyncStorage.setItem('Authentication', 'true');


        const convertedImage = await ImgToBase64.getBase64String('https://aashtojournal.org/wp-content/uploads/2019/01/010419azplow1.jpg')
                                        .then(base64String => {return base64String;}
                                        ).catch(err => console.log(err));
        this.setState({convertedImage:convertedImage })
        console.log(convertedImage);

    }
    render() {


        db.find({}, function (err, docs) {
            // docs is an array containing documents Mars, Earth, Jupiter
            console.log(docs);
            // If no document is found, docs is equal to []
        });


        return (
            <View style={styles.mainContainer}>
                <View style={{ alignItems: 'flex-end', flex: 0.1, margin: 12, justifyContent: 'flex-start' }}>
                    <Button
                        style={{ width: 100 }}
                        title='Sign Up'
                        type='outline'
                        raised
                        onPress={() => Actions.SignUp()} />
                </View>
                    {console.log(this.state.convertedImage)}
                <View style={styles.headerStyle}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../images/ToDoList.png')}
                    />
                    <Text style={{ fontSize: 28, letterSpacing: 4, fontWeight: 'bold' }}>To Do List</Text>
                </View>

                <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <Input
                        value={this.props.email}
                        label='Email:'
                        placeholder='@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)} />
                    <Input
                        value={this.props.password}
                        label='Password:'
                        placeholder='***********'
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)} />

                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        iconRight
                        style={{ width: 300, marginTop: 19 }}
                        icon={
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                                size={30}
                            />
                        }
                        title="   Sign In   "
                    />
                </View>
                {this.props.error ? <Text>{this.props.error}</Text> : null}
            </View>

        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(SignInScreen);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent'
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