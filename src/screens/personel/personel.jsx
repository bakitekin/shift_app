// Import libraries
import React from 'react';
import {StyleSheet, SafeAreaView, View, FlatList} from 'react-native';
import ArrowLeftSVG from '../../assets/svg/Icons/arrowLeftSVG';
import {SearchSVG} from '../../assets/svg/Icons';
import {
  CustomAddButton,
  CustomFilterButton,
  CustomInput,
  Header,
} from '../../components/ui';
import Users from '../../components/users/users';

// Create a component
const Personel = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header
        title="Personel"
        leftIcon={ArrowLeftSVG}
        onLeftPress={() => console.log('Left icon pressed')}
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
