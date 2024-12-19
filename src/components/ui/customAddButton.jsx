//import liraries
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {PlusSVG} from '../../assets/svg/Icons';
import ThemeColor from '../../theme';

const CustomAddButton = ({...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <PlusSVG strokeColor={ThemeColor.light.TEXTGRAY} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColor.light.WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR2,
  },
});

//make this component available to the app
export default CustomAddButton;
