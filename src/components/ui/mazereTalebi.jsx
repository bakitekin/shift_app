import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Genel talep bileşeni
const Talep = ({
  type = 'Talep',
  message,
  backgroundColor,
  badgeColor,
  textColor,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.row}>
        <View style={[styles.badge, {backgroundColor: badgeColor}]}>
          <Text style={[styles.badgeText, {color: textColor}]}>{type}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.message, {color: textColor}]}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

// Stil tanımları
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 45,
    height: 22,
    borderRadius: 16,
    justifyContent: 'center',
    borderWidth: 1,
  },
  badgeText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  textContainer: {
    marginLeft: 11,
  },
  message: {
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Talep;
