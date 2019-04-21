import React, { Component } from 'react';
import { Dimensions, Modal, Text, StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalSelector from 'react-native-modal-selector';
export default class TaskCreator1 extends Component {


  constructor(props) {
    super(props);
    this.state = {
      progessValue: 'Started',
    };


  }

  render() {
    const StatusData = [
      {
        key: 0,
        label: 'Football',
        component: <View><Text>Football</Text></View>
      },
      {
        key: 1,
        label: 'Baseball',
        component: <View><Text>Baseball</Text></View>

      },
      {
        key: 2,
        label: 'Hockey',
        component: <View><Text>Hockey</Text></View>
      },
    ];
    var { height, width } = Dimensions.get('window');
    return (
      < Modal
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0
        }}
        onBackdropPress={this.props.closeModal}
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ justifyContent: 'space-around', alignItems: 'center', flex: 1 }}>
          <View style={{ justifyContent: 'space-between', backgroundColor: '#F8F6D2', alignItems: 'flex-end', width: width * 0.95, height: height * 0.7 }}>
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

            <View style={{ flex: 1, width: '100%', justifyContent:'center', alignItems:'flex-start' }}>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10, marginTop: 5, flex: 0.5 }}>
                  <Text style={{ fontSize: 20,color:'#6D6E70', fontWeight: 'bold' }}>Title:</Text>
                  <TextInput
                    style={{ fontSize: 18, marginTop: 4, marginLeft: 15, borderBottomWidth: 2, marginRight: 25 }}
                    placeholder={'Title'}
                  />
                </View>

                <View style={{ marginLeft: 10, marginTop: 5, flex: 0.5 }}>
                  <Text style={{ fontSize: 20,color:'#6D6E70', fontWeight: 'bold' }}>Status:</Text>
                  <ModalSelector
                 
                  initValue={'Select'}
                  ref={selector => { this.selector = selector; }}
                  data={StatusData}
                  keyExtractor={item => item.id}
                  labelExtractor={item => item.name}
                  onChange={(option) => { this.setState({ progessValue: option.label }) }}>

                  <TextInput
                    editable={false}
                    style={{ fontSize: 18, marginTop: 4, marginLeft: 15, borderBottomWidth: 2, marginRight: 25 }}
                    placeholder={'Select Status'}
                    value={this.state.progessValue}
                  />
                </ModalSelector>
                </View>
              </View>


              <View style={{ flex: 1, marginLeft: 10, marginTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold',color:'#6D6E70' }}>Details:</Text>
                <TextInput
                  style={{ fontSize: 18, marginTop: 4, minHeight: 100, marginLeft: 15, marginRight: 25 }}
                  multiline
                  placeholder={'Enter Details....'}
                />

              </View>

              <View style={{flex:0.4,justifyContent:'center', width:'100%', alignItems:'center'}}>
              <Button
                  containerStyle={{ marginTop: 20, marginBottom: 20,  width: '50%'}}
                  titleStyle={{color:'#6D6E70', fontWeight: 'bold'}}
                  title="C R E A T E"
                  type="outline"
                  raised
                  onPress={() => this.props.closeModal()}
                />
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
    fontSize: 18,
    minWidth: 100,
    lineHeight: 23,
    flex: 1,
    marginTop: 5,
    borderBottomWidth: 2,
    marginLeft: 20
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: 'bold'
  },
  containerStyle: {
    minHeight: 90,
    alignItems: 'flex-start',
    marginTop: 10,
  },
})