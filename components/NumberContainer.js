import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const NumberContainer = ({ number, style }) => {
  return (
    <View style={{ ...styles.numberContainer, ...style }}><Text style={DefaultStyles.bodyText}>{number}</Text></View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    marginVertical: 1,
    borderWidth: 2,
    borderColor: colors.primaryLight,
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default NumberContainer;
