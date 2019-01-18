import React from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
  return(
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>
            {label}
        </Text>
        <TextInput
          secureTextEntry = {secureTextEntry}
          placeholder={placeholder}
          autoCorrect = {false} //to disbale the ios auto correct
          style={styles.inputStyle}
          value={value}
          onChangeText={onChangeText}
        />
    </View>
  );
};

const styles = {
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle:{
    height:20,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 20
  }
}
export {Input};
