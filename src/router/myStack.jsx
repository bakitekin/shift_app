import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PERSONEL, PROFILE, SHIFT, TALEPLER} from '../utils/router';
import {Profile} from '../screens/index';
import Talepler from '../screens/talepler';
import Personel from '../screens/personel/personel';
import AddShift from '../screens/addShift';
import MyTabs from './myTab';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTab" component={MyTabs} />
      <Stack.Screen name={PERSONEL} component={Personel} />
      <Stack.Screen name={SHIFT} component={AddShift} />
      <Stack.Screen name={TALEPLER} component={Talepler} />
      <Stack.Screen name={PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}

export default MyStack;
