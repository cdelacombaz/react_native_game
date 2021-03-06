import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
// Some icon sets are built in into Expo
import { FontAwesome } from '@expo/vector-icons'

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import CustomButton from '../components/CustomButton';
import { generateRandomBetween } from '../helpers';
import DefaultStyles from '../constants/default-styles';

const GameScreen = ({ secretNumber, gameOverHandler }) => {
  // useRef creates an object which can be bound to input elements
  // can also be used to define a value which survives component re-mounts (in this case)
  // values will be stored detached from the component
  // changing useRef values will not trigger a re-render of the component
  // as we are saving a new min or high, we don't want to rerender and therefor we use useRef here
  const currentMin = useRef(1);
  const currentMax = useRef(99);

  const initialGuess = generateRandomBetween(currentMin.current, currentMax.current)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guesses, setGuesses] = useState([initialGuess]);
  const [guessCount, setGuessCount] = useState(1);

  newGuess = () => {
    const nextNumber = generateRandomBetween(currentMin.current, currentMax.current)
    setCurrentGuess(nextNumber);
    setGuesses(pastGuesses => [nextNumber, ...pastGuesses]);
    setGuessCount(pastCount => pastCount += 1)
  };

  nextGuessHandler = (hint) => {
    if (hint === 'lower' && currentGuess > secretNumber) {
      currentMax.current = currentGuess - 1;
      newGuess();
      return;
    };
    if (hint === 'higher' && currentGuess < secretNumber) {
      currentMin.current = currentGuess + 1;
      newGuess();
      return;
    };
    Alert.alert('That is cheating!', 'Give the computer the correct hint...', [{ text: 'OK', style: 'cancel' }])
  };

  // useEffect gets called every time after the component has been rendered
  // we can limit it by adding a list of dependencies after the return code block
  // the code will only run if the dependencies changed
  useEffect(() => {
    if (currentGuess === secretNumber) {
      gameOverHandler(guessCount, guesses, 'won');
      return;
    };
    if (guessCount === 5 && currentGuess !== secretNumber) {
      gameOverHandler(guessCount, guesses, 'lost');
      return;
    };
  }, [currentGuess, secretNumber, guessCount]);

  return (
    <View style={DefaultStyles.mainContainer}>
      <Text style={DefaultStyles.title}>Opponent's Guess {guessCount}/5:</Text>
      <Card style={DefaultStyles.cardContainer}>
        <NumberContainer number={currentGuess} />
        <View style={DefaultStyles.buttonContainer}>
          <View style={DefaultStyles.button}><CustomButton onPress={() => nextGuessHandler('lower')} ><FontAwesome name='arrow-down' size={18} /></CustomButton></View>
          <View style={DefaultStyles.button}><CustomButton onPress={() => nextGuessHandler('higher')} ><FontAwesome name='arrow-up' size={18} /></CustomButton></View>
        </View>
      </Card>
      <ScrollView>
        {guesses.map(guess => {
          return <NumberContainer number={guess} key={guess} style={styles.listItem} />
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 25
  }
});

export default GameScreen;
