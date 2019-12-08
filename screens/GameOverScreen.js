import React from 'react';
import { View, Text, Button } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = ({ guessCount, result, secretNumber, restartGameHandler }) => {
  return (
    <View style={DefaultStyles.mainContainer}>
      <Text style={DefaultStyles.title}>{result === 'won' ? 'WIN!' : 'GAME OVER!'}</Text>
      <Card style={DefaultStyles.cardContainer}>
        <Text style={DefaultStyles.bodyText}>You guessed {guessCount} times.</Text>
        <Text style={DefaultStyles.bodyText}>The target number was:</Text>
        <NumberContainer number={secretNumber} />
        <View style={DefaultStyles.button}><Button title='REPLAY' color={colors.primaryLight} onPress={restartGameHandler} /></View>
      </Card>
    </View>
  );
};

export default GameOverScreen;
