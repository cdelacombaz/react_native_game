import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import Card from './Card';
import NumberContainer from './NumberContainer';
import colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const Confirmation = props => {
  return (
    <Card style={{ ...DefaultStyles.cardContainer, ...styles.cardContainer, ...props.style }}>
      <Text style={DefaultStyles.bodyText}>{props.text}</Text>
      <NumberContainer number={props.number} />
      <View style={DefaultStyles.button}><Button title='START' color={colors.primary} onPress={props.onPressHandler} /></View>
    </Card >
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 150,
    width: '60%',
    justifyContent: 'space-between'
  }
});

export default Confirmation;
