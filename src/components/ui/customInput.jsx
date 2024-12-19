// Import libraries
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {SearchSVG} from '../../assets/svg/Icons';
import ThemeColor from '../../theme';

// Create a reusable CustomInput component
const CustomInput = ({
  value, // Input değeri
  onChangeText, // Değişiklik olayını yönetecek fonksiyon
  placeholder = 'Search...', // Varsayılan placeholder
  leftIcon: LeftIcon = SearchSVG, // Sol ikon bileşeni
  rightIcon: RightIcon, // Sağ ikon bileşeni (isteğe bağlı)
  onRightIconPress, // Sağ ikon için tıklama olayı
  style, // Ekstra stil
  inputStyle, // TextInput için özel stil
  containerStyle, // Ana View için özel stil
  placeholderTextColor, // Text
  ...props // TextInput’a aktarılacak ek özellikler
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Sol İkon */}
      {LeftIcon && (
        <View style={styles.iconWrapper}>
          <LeftIcon width={20} height={20} />
        </View>
      )}

      {/* Text Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={ThemeColor.light.TEXTGRAY}
        style={[styles.textInput, inputStyle]}
        {...props}
      />

      {/* Sağ İkon */}
      {RightIcon && (
        <View style={styles.iconWrapper} onTouchEnd={onRightIconPress}>
          <RightIcon width={20} height={20} />
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: ThemeColor.light.WHITE,
    margin: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR2,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: ThemeColor.light.TEXTLIGHTGRAY,
  },
});

export default CustomInput;
