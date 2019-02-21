import React, { Component } from 'react';
import { Text, StyleSheet, LayoutAnimation , View, Image } from 'react-native';
import { Input } from '../components/Input';
import { Button} from 'react-native-elements';


export default class SignInScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        LayoutAnimation.spring();
    }
    
    render() {
        return (

            <View style={styles.mainContainer}>
                <View style={{ alignItems: 'flex-end', flex:0.1, margin: 12, justifyContent:'flex-start' }}>
                    <Button
                        style={{ width: 100 }}
                        title='Sign Up'
                        type= 'outline'
                        raised />
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
                        label='Email:'
                        placeholder='@gmail.com' />
                    <Input
                        label='Password:'
                        placeholder='***********'
                        secureTextEntry />
                    
                    <Button
                        style={{ width: 300, marginTop: 30 }}
                        title='Sign In'
                        

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
        flex: 0.2,
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
        //backgroundColor: 'red'
       
    },

});