// Import libraries
import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import ArrowLeftSVG from '../../assets/svg/Icons/arrowLeftSVG';
import {SearchSVG} from '../../assets/svg/Icons';
import {
  CustomAddButton,
  CustomFilterButton,
  CustomHeader,
  CustomInput,
} from '../../components/ui';
import Users from '../../components/users/users';
import {HOME} from '../../utils/router';
import {useNavigation} from '@react-navigation/native';

// Create a component
const Personel = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <CustomHeader
        title="Personel"
        leftIcon={ArrowLeftSVG}
        onLeftPress={() => {
          navigation.navigate(HOME);
        }}
      />
      {/* Search Bar and Actions */}
      <View style={styles.actionRow}>
        {/* Search Input */}
        <CustomInput
          placeholder="Personel Ara"
          leftIcon={SearchSVG}
          onChangeText={text => console.log(text)}
          containerStyle={styles.searchInput} // Özel stil
        />

        {/* Filter Button */}
        <CustomFilterButton />

        {/* Add Button */}
        <CustomAddButton />
      </View>
      <Users />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    marginRight: 0,
  },
});

export default Personel;
