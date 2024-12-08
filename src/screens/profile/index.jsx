import React from 'react';
import {Text, View} from 'react-native';
import DefaultStyle from '../../styles/defaultStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/ui/ınput';

const Profile = () => {
  return (
    <SafeAreaView style={DefaultStyle.container}>
      <View>
        <Text>Profile</Text>
        <Input placeholder="isim girin" title="İsim Bilgisi Girin" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
