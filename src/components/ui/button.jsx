import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import ThemeColor from '../../theme';

const Button = props => {
  const {title, status} = props;

  const buttonStyle = () => {
    switch (status) {
      case 'success':
        return styles.success;
      case 'error':
        return styles.error;
      case 'warning':
        return styles.warning;
      case 'info':
        return styles.info;
      default:
        return styles.success;
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, buttonStyle(), props.style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    borderRadius: 15,
    margin: 5,
  },
  success: {
    backgroundColor: ThemeColor.green,
  },
  error: {
    backgroundColor: ThemeColor.red,
  },
  warning: {
    backgroundColor: ThemeColor.yellow,
  },
  info: {
    backgroundColor: ThemeColor.purple,
  },
  text: {
    color: ThemeColor.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
