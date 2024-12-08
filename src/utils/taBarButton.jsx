import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ThemeColor from '../theme';

const TabBarButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.tabBarButton} onPress={onPress}>
      <Icon name="add" size={32} color={ThemeColor.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabBarButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: ThemeColor.orange,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    shadowColor: ThemeColor.black,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
});

export default TabBarButton;
