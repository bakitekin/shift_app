import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ThemeColor from '../../theme';

const FlatActionButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="add" size={30} color={ThemeColor.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColor.green,
    opacity: 0.6,
    position: 'absolute',
    top: 720,
    right: 20,
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
});

export default FlatActionButton;
