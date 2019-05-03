import React, { Component } from 'react';
import { Text, StyleSheet, Keyboard, LayoutAnimation, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import TaskCreator from '../components/TaskCreator';
import { AsyncStorage } from 'react-native';





class HomeScreen extends Component {

    state = {
        showModal: false,
    }
    constructor(props) {
        super(props)
    }

    render() {



        return (

            <View style={styles.mainContainer}>

                <View style={styles.list}>
                    <Button
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                        type='clear'
                        icon={
                            <Icon
                                name='plus-circle'
                                type='font-awsesome'
                                size={30}
                                color="white"
                            />
                        }

                    />

                </View>
                <TaskCreator
                    visible={this.state.showModal}
                    closeModal={() => this.setState({ showModal: !this.state.showModal })}
                />
            </View>

        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({

    list: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',


    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#42526E',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 40
    },
    

});