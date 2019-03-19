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
export {Input};
