import { StyleSheet } from 'react-native';

import fonts from '../constants/fonts';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    fontFamily: fonts.primaryBold,
  },
  bodyText: {
    fontFamily: fonts.primary,
    fontSize: 18
  },
  cardContainer: {
    width: '80%',
    height: 200,
    justifyContent: 'space-around',
    padding: 15,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    width: 100
  }
});
