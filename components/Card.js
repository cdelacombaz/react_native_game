import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    // background needs to be set in order for the shadow to render. even if it's the same color as the parent's background
    backgroundColor: 'white',
    // shadow for IOS - custom shadows
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowRadius: 10,
    // shadow for Android - uses default Android material design elevation
    elevation: 10
  },
});

export default Card;
