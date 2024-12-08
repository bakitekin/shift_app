//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ThemeColor from '../../theme';
import DefaultStyle from '../../styles/defaultStyle';
import Input from '../../components/ui/ınput';
import Button from '../../components/ui/button';

// create a component
const Calendar = () => {
  return (
    <ScrollView style={[DefaultStyle.container, {marginTop: 40}]}>
      <Text>Calendar</Text>
      <Input />
      <Button />
    </ScrollView>
  );
};

//make this component available to the app
export default Calendar;
