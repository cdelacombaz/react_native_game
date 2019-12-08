import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
// Keyboard is not a component, but an API to interact with the keyboard. Alert is also an API
import { Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Confirmation from '../components/StartGameConfirmation';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import DefaultStyles from '../constants/default-styles';

const StartGameScreen = props => {
  const [numberInput, setNumberInput] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const inputHandler = userInput => {
    // REGEX: everything that is not a number from 0 to 9 will be replaced with an empty string
    // the 'g' means globally. it will not only look for the first hit / search in the entire text
    setNumberInput(userInput.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setNumberInput('')
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(numberInput);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Input has to be a number between 1 and 99.', [{ text: 'OK', style: 'destructive', onPress: setNumberInput('') }])
      return;
    };
    setConfirmed(true);
    setSelectedNumber(parseInt(numberInput));
    setNumberInput('');
    Keyboard.dismiss()
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={DefaultStyles.mainContainer}>
        <Text style={DefaultStyles.title}>Start a new game</Text>
        <Card style={DefaultStyles.cardContainer}>
          <Text style={{ ...DefaultStyles.bodyText, ...styles.subTitle }}>Enter a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={inputHandler}
            value={numberInput}
          />
          <View style={DefaultStyles.buttonContainer}>
            <View style={DefaultStyles.button}><CustomButton onPress={resetInputHandler} >RESET</CustomButton></View>
            <View style={DefaultStyles.button}><CustomButton onPress={confirmInputHandler} >CONFIRM</CustomButton></View>
          </View>
        </Card>
        {confirmed ?
          <Confirmation
            style={styles.confirmation}
            text={'Confirmed Number'}
            number={selectedNumber}
            onPressHandler={() => props.startGameHandler(selectedNumber)} />
          : null
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  confirmation: {
    marginTop: 50
  }
});

export default StartGameScreen;
