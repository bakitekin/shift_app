//import liraries
import React from 'react';
import {CALENDAR, HOME, NOTIFICATION, PROFILE, SHIFT} from './router';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const TabBarIcons = (route, focused, color, size) => {
  switch (route.name) {
    case HOME:
      return (
        <Icon
          name={focused ? 'home' : 'home-outline'}
          size={size}
          color={color}
        />
      );
    case PROFILE:
      return (
        <Icon
          name={focused ? 'person' : 'person-outline'}
          size={size}
          color={color}
        />
      );
    case CALENDAR:
      return (
        <Icon
          name={focused ? 'calendar' : 'calendar-outline'}
          size={size}
          color={color}
        />
      );
    case NOTIFICATION:
      return (
        <Icon
          name={focused ? 'notifications' : 'notifications-outline'}
          size={size}
          color={color}
        />
      );
    default:
      return null;
  }
};

//make this component available to the app
export default TabBarIcons;
