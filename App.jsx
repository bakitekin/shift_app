/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/router/myStack';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
