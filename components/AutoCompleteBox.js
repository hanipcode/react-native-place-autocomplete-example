import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  AutoCompleteBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 10,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderColor: '#BBB',
    borderWidth: 2,
    borderRadius: 3,
    elevation: 3
  },
  AutoCompleteInput: {
    flexGrow: 1
  },
  AutoCompleteClose: {
    padding: 5,
    color: '#999',
    fontWeight: '900',
    elevation: 5,
    fontSize: 18
  }
});

const AutoCompleteBox = props => (
  <View style={styles.AutoCompleteBox}>
    <TextInput
      {...props}
      underlineColorAndroid="#FFF"
      style={styles.AutoCompleteInput}
    />
    <TouchableOpacity onPress={() => props.clearInput()}>
      <Text style={styles.AutoCompleteClose}>X</Text>
    </TouchableOpacity>
  </View>
);

AutoCompleteBox.defaultProps = {
  clearInput: () => console.log('Clear Input Pressed')
};

export default AutoCompleteBox;
