import React, { Component } from 'react';
import { Text, StyleSheet, LayoutAnimation , View, Image } from 'react-native';



class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        LayoutAnimation.spring();
    }

  
    render() {
        
        return (

            <View style={styles.mainContainer}>
                <Text>Welcome to To Do List</Text>
            </View>

        )
    }
}


export default HomeScreen;
    
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'center',

    },

});