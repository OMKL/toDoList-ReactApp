import React from 'react';
import {Dimensions, Modal, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const TaskCreator = ({ visible, closeModal }) => {
  var {height, width} = Dimensions.get('window');
  return(
   
        <Modal
        style = {{justifyContent: 'center',
        alignItems: 'center',
        margin: 0}}
          onBackdropPress={this.closeModal}
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
           <View style={{justifyContent: 'space-around', alignItems: 'center', flex:1}}>
            <View style={{justifyContent: 'flex-start', backgroundColor:'#F8F6D2', alignItems:'flex-end', width: width*0.9, height: height*0.6}}>
            <Button
                        onPress = {() => closeModal()}
                        type='clear'
                        icon={
                            <Icon
                                name='times-circle'
                                size={30}
                                color="black"
                            />
                        }

                    />
            </View>
          </View>
        </Modal>
   
  );
};

const styles = {
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 0.6,
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 25
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 0.4,
    fontWeight: 'bold'
  },
  containerStyle:{
    height:80,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  }
}
export {TaskCreator};
