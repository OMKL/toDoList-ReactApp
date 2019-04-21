import React, { Component } from 'react';
import { Dimensions, Modal, Text, PickerIOS, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TaskCreator1 extends Component {

    constructor(props) {
        super(props);
      
        this.state = {};

        
    }

    render() {
        var { height, width } = Dimensions.get('window');
        return (
            < Modal
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0
                }}
                onBackdropPress={this.closeModal}
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ justifyContent: 'space-around', alignItems: 'center', flex: 1 }}>
                    <View style={{ justifyContent: 'flex-start', backgroundColor: '#F8F6D2', alignItems: 'flex-end', width: width * 0.95, height: height * 0.7 }}>
                        <Button
                            onPress={() => this.props.closeModal()}
                            type='clear'
                            icon={
                                <Icon
                                    name='times-circle'
                                    size={30}
                                    color="black"
                                />
                            }

                        />
                        <View style={{ flex: 1, width: '100%' }}>
                            <View style={styles.containerStyle}>
                                <Text style={styles.labelStyle}>
                                    Title:
                        </Text>
                                <TextInput
                                    placeholder='Add Title'
                                    autoCorrect={false} //to disbale the ios auto correct
                                    style={styles.inputStyle}
                                // value={value}
                                // onChangeText={onChangeText}
                                />
                            </View>
                            <View style={styles.containerStyle}>
                                <Text style={styles.labelStyle}>
                                    Status:
                        </Text>
                                <PickerIOS
                                    selectedValue={'To Do'}
                                    style={{
                                        paddingRight: 5,
                                        marginLeft: 40,
                                        height: 20, width: 170,
                                        marginRight: 25
                                    }}
                                // onValueChange={}
                                >
                                    <PickerIOS.Item label="In Progress" value="In Progress" />
                                    <PickerIOS.Item label="In Progress" value="In Progress" />
                                    <PickerIOS.Item label="In Progress" value="In Progress" />
                                    <PickerIOS.Item label="In Progress" value="In Progress" />

                                    <PickerIOS.Item label="In Progress" value="In Progress" />
                                    <PickerIOS.Item label="Done" value="Done" />
                                </PickerIOS>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal >
        )
    }


}
const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 20,
        fontSize: 18,
        lineHeight: 23,
        flex: 0.7,
        borderBottomWidth: 2,
        borderBottomRadius: 20,
        marginRight: 25
    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 0.3,
        fontWeight: 'bold'
    },
    containerStyle: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }
})