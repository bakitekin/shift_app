/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CALENDAR,
  NOTIFICATION,
  PROFILE,
  SHIFT,
  SHIFTPERSON,
} from '../utils/router';
import {Notification, Profile, Shift, Calendar} from '../screens/index';
import MyTabs from './myTab';
import ShiftPerson from '../screens/addShift/shiftPerson';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyTab" component={MyTabs} />
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={SHIFT} component={Shift} />
      <Stack.Screen name={CALENDAR} component={Calendar} />
      <Stack.Screen name={NOTIFICATION} component={Notification} />
      <Stack.Screen name={SHIFTPERSON} component={ShiftPerson} />
    </Stack.Navigator>
  );
}

export default MyStack;
