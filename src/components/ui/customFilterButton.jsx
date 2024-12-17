//import liraries
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FilterSVG} from '../../assets/svg/Icons';
import ThemeColor from '../../theme';

// create a component
const CustomFilterButton = ({...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <FilterSVG />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColor.WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ThemeColor.BORDERCOLOR2,
  },
});

//make this component available to the app
export default CustomFilterButton;
