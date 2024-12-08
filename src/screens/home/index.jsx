//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ThemeColor from '../../theme';

// create a component
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColor.gray,
  },
});

//make this component available to the app
export default Home;
