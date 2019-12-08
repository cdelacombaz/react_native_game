import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { Alert } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import { generateRandomBetween } from '../helpers';
import colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const GameScreen = ({ secretNumber, gameOverHandler }) => {
  // useRef creates an object which can be bound to input elements
  // can also be used to define a value which survives component re-mounts (in this case)
  // values will be stored detached from the component
  // changing useRef values will not trigger a re-render of the component
  // as we are saving a new min or high, we don't want to rerender and therefor we use useRef here
  const currentMin = useRef(1);
  const currentMax = useRef(99);

  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(currentMin.current, currentMax.current));
  const [guessCount, setGuessCount] = useState(1);

  nextGuessHandler = (hint) => {
    if (hint === 'lower' && currentGuess > secretNumber) {
      currentMax.current = currentGuess - 1;
      setCurrentGuess(generateRandomBetween(currentMin.current, currentMax.current));
      setGuessCount(guessCount + 1);
      return;
    };
    if (hint === 'higher' && currentGuess < secretNumber) {
      currentMin.current = currentGuess + 1;
      setCurrentGuess(generateRandomBetween(currentMin.current, currentMax.current));
      setGuessCount(guessCount + 1);
      return;
    };
    Alert.alert('That is cheating!', 'Give the computer the correct hint...', [{ text: 'OK', style: 'cancel' }])
  };

  // useEffect gets called every time after the component has been rendered
  // we can limit it by adding a list of dependencies after the return code block
  // the code will only run if the dependencies changed
  useEffect(() => {
    if (currentGuess === secretNumber) {
      gameOverHandler(guessCount, 'won');
      return;
    };
    if (guessCount === 7 && currentGuess !== secretNumber) {
      gameOverHandler(guessCount, 'lost');
      return;
    };
  }, [currentGuess, secretNumber]);

  return (
    <View style={DefaultStyles.mainContainer}>
      <Text style={DefaultStyles.title}>Opponent's Guess {guessCount}/5:</Text>
      <Card style={DefaultStyles.cardContainer}>
        <NumberContainer number={currentGuess} />
        <View style={DefaultStyles.buttonContainer}>
          <View style={DefaultStyles.button}><Button color={colors.primary} title='LOWER' onPress={() => nextGuessHandler('lower')} /></View>
          <View style={DefaultStyles.button}><Button color={colors.primaryLight} title='HIGHER' onPress={() => nextGuessHandler('higher')} /></View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
