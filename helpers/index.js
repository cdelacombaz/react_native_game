// Depending on the version expo-font might not be installed. Install it with `expo install expo-font`
// Under the hood it uses npm install, but first it will find the correct version to be installed
import * as Font from 'expo-font';

export const fetchFonts = () => {
  // By importing from expo-font we have access to loadAsync. It's argument is an object with all the fonts we want to use.
  // LoadAsync returns a promise
  return Font.loadAsync({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf')
  });
};

export const generateRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
};
