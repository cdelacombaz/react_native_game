import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import CustomButton from '../components/CustomButton';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = ({ guessCount, guesses, result, secretNumber, restartGameHandler }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={DefaultStyles.title}>{result === 'won' ? 'WIN!' : 'GAME OVER!'}</Text>
      <View style={styles.imageContainer}>
        {result === 'won'
          ? <Image style={styles.image} resizeMode='cover' source={{ uri: 'https://media.giphy.com/media/6brH8dM3zeMyA/giphy.gif' }} />
          : <Image style={styles.image} resizeMode='cover' source={require('../assets/giphy-downsized.gif')} />
        }
      </View>
      <Card style={DefaultStyles.cardContainer}>
        <Text style={DefaultStyles.bodyText}>You guessed {guessCount} times.</Text>
        <Text style={DefaultStyles.bodyText}>The target number was:</Text>
        <NumberContainer number={secretNumber} />
        <View style={DefaultStyles.button}><CustomButton onPress={restartGameHandler} >REPLAY</CustomButton></View>
      </Card>
      <View style={styles.guessesContainer}>
        {guesses.reverse().map(guess => {
          return <NumberContainer number={guess} key={guess} style={guess === secretNumber ? styles.correctNumber : styles.wrongNumber} />
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Didn't take the DefaultStyle.mainContainer on purpose. If we put flex: 1 to Scrollview, the scrolling doesn't work on Android.
  // The parent View has to have flex: 1 though
  listContainer: {
    padding: 15,
    alignItems: 'center',
    width: '100%',
    flexGrow: 1
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginBottom: 25
  },
  image: {
    width: '100%',
    height: '100%'
  },
  wrongNumber: {
    marginHorizontal: 10,
    borderColor: 'red'
  },
  correctNumber: {
    marginHorizontal: 10,
  },
  guessesContainer: {
    flexDirection: 'row',
    marginTop: 25,
  }
});

export default GameOverScreen;
