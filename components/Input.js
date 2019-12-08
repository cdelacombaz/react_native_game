import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/default-styles';

const Input = props => {
  return (
    // {...props} allows us to pass down built-in properties from the parent component, to modify this TextInput
    // {{ ...styles.input, ...props.style }} will merge the styles of this component with the styles received as props from the parent
    <TextInput {...props} style={{ ...DefaultStyles.bodyText, ...styles.input, ...props.style }} ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;
