import React, { Component } from 'react';
import { Text, StyleSheet, Keyboard, LayoutAnimation, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';



class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        LayoutAnimation.spring();
    }

    render() {

        return (

            <View style={styles.mainContainer}>
        <View style={styles.settings}>
                    <Button
                        type='clear'
                        icon={
                            <Icon
                                name='cog'
                                size={30}
                                color="white"
                            />
                        }
                        onPress={() => Actions.Settings()}
                    />

                </View>
                <View style={styles.list}>
                    <Button
                        type='clear'
                        icon={
                            <Icon
                                name='plus-circle'
                                size={50}
                                color="white"
                            />
                        }

                    />

                </View>

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
    settings:{
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        
    }

});