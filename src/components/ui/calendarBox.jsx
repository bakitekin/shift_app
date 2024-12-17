//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ThemeColor from '../../theme';

// create a component
const CalendarBox = props => {
  return <View {...props} style={styles.container}></View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: ThemeColor.BORDERCOLOR,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColor.LIGHTGRAY,
  },
});

//make this component available to the app
export default CalendarBox;
