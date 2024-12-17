// Import libraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Create a reusable Header component
const Header = ({
  title = 'Header Title', // Varsayılan başlık
  leftIcon: LeftIcon, // Sol ikon bileşeni
  rightIcon: RightIcon, // Sağ ikon bileşeni
  onLeftPress, // Sol ikon tıklama olayı
  onRightPress, // Sağ ikon tıklama olayı
}) => {
  return (
    <View style={styles.header}>
      {/* Sol İkon */}
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={onLeftPress}
        disabled={!LeftIcon} // Eğer ikon yoksa tıklama devre dışı bırakılır
      >
        {LeftIcon && <LeftIcon width={35} height={35} />}
      </TouchableOpacity>

      {/* Başlık */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Sağ İkon */}
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={onRightPress}
        disabled={!RightIcon} // Eğer ikon yoksa tıklama devre dışı bırakılır
      >
        {RightIcon && <RightIcon width={35} height={35} />}
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 44,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  iconWrapper: {
    width: 44, // İkonun belirli bir alan kaplamasını sağlar
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Make this component available to the app
export default Header;
