import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import ThemeColor from '../../theme';

const Input = ({
  title,
  style,
  labelStyle,
  containerStyle,
  placeholderTextColor = ThemeColor.darkGray,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{title}</Text>
      <TextInput
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, style]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: ThemeColor.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 12,
    paddingVertical: 15,
    backgroundColor: ThemeColor.white,
    color: ThemeColor.black,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: ThemeColor.black,
  },
});

export default Input;
