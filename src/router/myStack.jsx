import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MAZERETGUNLERI,
  NEWUSERS,
  PERSONEL,
  PERSONELDETAY,
  PROFILE,
  TALEPLER,
} from '../utils/router';
import {
  Profile,
  Talepler,
  Personel,
  NewUsers,
  MazeretGunleri,
} from '../screens/index';
import MyTabs from './myTabs';
import PersonelDetayı from '../screens/personel/personelDetay';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTab" component={MyTabs} />
      <Stack.Screen name={PERSONEL} component={Personel} />
      <Stack.Screen name={NEWUSERS} component={NewUsers} />
      <Stack.Screen name={TALEPLER} component={Talepler} />
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={MAZERETGUNLERI} component={MazeretGunleri} />
      <Stack.Screen name={PERSONELDETAY} component={PersonelDetayı} />
    </Stack.Navigator>
  );
}

export default MyStack;
