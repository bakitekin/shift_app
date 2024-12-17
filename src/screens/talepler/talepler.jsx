//import liraries
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import DefaultStyle from '../../styles/defaultStyle';

// create a component
const Talepler = () => {
  return (
    <ScrollView style={[DefaultStyle.container, {marginTop: 40}]}>
      <View>
        <Text>Talepler</Text>
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default Talepler;
