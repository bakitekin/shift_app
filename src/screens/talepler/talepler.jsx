import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {CustomHeader} from '../../components/ui';
import ArrowLeftSVG from '../../assets/svg/Icons/arrowLeftSVG';
import {HOME} from '../../utils/router';
import {useNavigation} from '@react-navigation/native';
import NotificationCard from '../../components/natifitication/natificationCart';

const Talepler = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <CustomHeader
        title="Talepler"
        leftIcon={ArrowLeftSVG}
        onLeftPress={() => {
          navigation.navigate(HOME);
        }}
      />
      <ScrollView>
        <NotificationCard
          type="change" // veya "excuse"
          status="pending" // "pending", "rejected", "approved"
          date="12 Aralık"
          time="08:00 - 16:00"
          personName="Ahmet Yılmaz"
          personTitle="Astsubay"
        />
        <NotificationCard
          type="excuse"
          status="approved"
          date="12 Aralık"
          time="08:00 - 16:00"
          personName="Ahmet Yılmaz"
          personTitle="Astsubay"
        />
        <NotificationCard
          type="change"
          status="rejected"
          date="12 Aralık"
          time="08:00 - 16:00"
          personName="Ahmet Yılmaz"
          personTitle="Astsubay"
        />
        <NotificationCard
          type="excuse"
          status="pending"
          date="12 Aralık"
          time="08:00 - 16:00"
          personName="Ahmet Yılmaz"
          personTitle="Astsubay"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Talepler;
