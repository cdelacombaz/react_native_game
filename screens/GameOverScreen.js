import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import CustomButton from '../components/CustomButton';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = ({ guessCount, result, secretNumber, restartGameHandler }) => {
  return (
    <View style={DefaultStyles.mainContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default GameOverScreen;
