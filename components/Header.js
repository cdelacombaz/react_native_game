import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';
import fonts from '../constants/fonts';

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primaryExtraLight,
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 35,
    fontFamily: fonts.primaryBold
  }
});

export default Header;
