import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 3
  },
  buttonText: {
    color: colors.secondary,
    textAlign: 'center'
  }
});

export default CustomButton;
