import React from 'react';
import {Text, View} from 'react-native';
import DefaultStyle from '../../styles/defaultStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/ui/ınput';
import ThemeColor from '../../theme';

const Profile = () => {
  return (
    <SafeAreaView style={DefaultStyle.container}>
      <View>
        <Text style={{color: ThemeColor.TEXTLIGHTGRAY}}>Profile</Text>
        <Text style={{color: ThemeColor.GRAY}}>Profile</Text>
        <Text style={{color: ThemeColor.LIGHTGRAY}}>Profile</Text>
        <Text style={{color: ThemeColor.TEXTGRAY}}>Profile</Text>
        <Input placeholder="isim girin" title="İsim Bilgisi Girin" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
