//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import ThemeColor from '../../theme';

// CustomButton Component
const CustomButton = ({title, status = 'default', onPress, style}) => {
  const buttonStyles = [styles.buttonBase];
  const textStyles = [styles.textBase];

  // Status'e göre dinamik stiller
  switch (status) {
    case 'CANCEL': // Vazgeç Butonu
      buttonStyles.push(styles.cancelButton);
      textStyles.push(styles.cancelText);
      break;

    case 'DISABLED': // Oluştur Butonu
      buttonStyles.push(styles.disabledButton);
      textStyles.push(styles.disabledText);
      break;
    case 'PRIMARY': // Oluştur Butonu
      buttonStyles.push(styles.primaryButton);
      textStyles.push(styles.primaryText);
      break;

    default: // Varsayılan
      buttonStyles.push(styles.defaultButton);
      textStyles.push(styles.defaultText);
  }

  return (
    <TouchableOpacity
      style={[...buttonStyles, style]}
      onPress={onPress}
      disabled={status === 'DISABLED'}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 65,
    borderRadius: 8,
    borderWidth: 1,
  },
  textBase: {
    fontSize: 16,
    fontWeight: '500',
  },
  // CANCEL (Vazgeç Butonu)
  cancelButton: {
    backgroundColor: ThemeColor.light.WHITE,
    borderColor: ThemeColor.light.BORDERCOLOR2,
  },
  cancelText: {
    color: ThemeColor.light.BLACK,
  },
  // DISABLED (Oluştur Butonu)
  disabledButton: {
    backgroundColor: ThemeColor.light.DISABLED,
    borderColor: ThemeColor.light.BORDERCOLOR2,
  },
  disabledText: {
    color: ThemeColor.light.WHITE,
  },
  // PRIMARY (Oluştur Butonu)
  primaryButton: {
    backgroundColor: ThemeColor.light.PRIMARY,
    borderColor: ThemeColor.light.PRIMARY,
  },
  primaryText: {
    color: ThemeColor.light.WHITE,
  },
  // DEFAULT (Varsayılan)
  defaultButton: {
    backgroundColor: ThemeColor.light.WHITE,
    borderColor: ThemeColor.light.BORDERCOLOR2,
  },
  defaultText: {
    color: ThemeColor.light.BLACK,
  },
});

export default CustomButton;
