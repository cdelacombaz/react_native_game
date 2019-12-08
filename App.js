import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { fetchFonts } from './helpers';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('start')
  const [secretNumber, setSecretNumber] = useState(null);
  const [guessCount, setGuessCount] = useState(0);
  const [result, setResult] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  const startGameHandler = num => {
    setSecretNumber(num)
    setCurrentScreen('playing');
    setGuessCount(0)
  };

  const gameOverHandler = (guessesCount, status) => {
    setGuessCount(guessesCount);
    setCurrentScreen('gameOver')
    setResult(status)
  };

  const restartGameHandler = () => {
    setCurrentScreen('start');
    setSecretNumber(null);
    setGuessCount(0);
    setResult('');
  };

  const content =
    currentScreen === 'start' ? <StartGameScreen startGameHandler={startGameHandler} />
      : currentScreen === 'playing' ? <GameScreen secretNumber={secretNumber} gameOverHandler={gameOverHandler} />
        : currentScreen === 'gameOver' ? <GameOverScreen secretNumber={secretNumber} guessCount={guessCount} result={result} restartGameHandler={restartGameHandler} />
          : null

  if (!dataLoaded) {
    // startAsync expects a function that returns a promise
    // onFinish expects a callback function that will run as soon as the promise resolves
    // onError expects a callback function that will run if the promise rejects
    return < AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />
  };

  return (
    <View style={styles.screen}>
      <Header title='Guess my Number!' />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App;
