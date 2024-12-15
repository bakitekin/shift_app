// import libraries
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ThemeColor from '../../theme';
import DefaultText from '../../styles/defaultText';
import DefaultStyle from '../../styles/defaultStyle';
import Calendar from '../../assets/svg/Icons/calendar';
import CheckDrown from '../../assets/svg/Icons/checkDrown';
import HomeCalendar from '../../components/home/homeCalendar';
import Sentry from '../../components/home/sentry';

const Home = () => {
  // Örnek nöbetçiler
  const sentries = [
    {
      role: 'J.Asb.Kd.Üçvş.',
      name: 'Serdar ŞENGÜL',
      shiftType: 'Nöbetçi Asb.',
      location: 'Nizamiye Nöbetçisi',
      isToday: true,
      startTime: '08:00',
      endTime: '16:00',
      mazeret: 'Nöbet Mazereti Talebi Oldu!',
    },
    {
      role: 'J.Mu.Asb.Üçvş.',
      name: 'Ünal ACI',
      shiftType: 'Vardiya Nöbetçisi',
      location: 'MEBS Şube Müdürlüğü',
      isToday: true,
      startTime: '00:00',
      endTime: '08:00',
      talep: 'Nöbet Değişikliği Talebi Oldu!',
    },
    {
      role: 'J.Ütğm.',
      name: 'Okan DEMİR',
      shiftType: 'Vardiya Nöbetçisi',
      location: 'Siber Şube Müdürlüğü',
      isToday: true,
      startTime: '00:00',
      endTime: '08:00',
      talep: 'Nöbet Değişikliği Talebi Oldu!',
    },
  ];

  return (
    <SafeAreaView style={DefaultStyle.container}>
      <View style={DefaultStyle.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={DefaultText.textLg}>Bugün, 15 Aralık</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Calendar width={20} height={20} />
            <Text style={styles.dropdownText}>Aralık</Text>
            <CheckDrown width={20} height={20} />
          </TouchableOpacity>
        </View>

        {/* Takvim */}
        <HomeCalendar />

        {/* Nöbetçiler */}
        <View style={styles.sectionHeader}>
          <Text style={DefaultText.softTextLg}>Nöbetçiler</Text>
        </View>
        <ScrollView>
          {sentries.map((sentry, index) => (
            <Sentry
              key={index}
              role={sentry.role}
              name={sentry.name}
              shiftType={sentry.shiftType}
              location={sentry.location}
              isToday={sentry.isToday}
              startTime={sentry.startTime}
              endTime={sentry.endTime}
              mazeret={sentry.mazeret}
              talep={sentry.talep}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    backgroundColor: ThemeColor.WHITE,
    width: 140,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ThemeColor.BORDERCOLOR,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dropdownText: {
    fontSize: 16,
    color: ThemeColor.BLACK,
    fontWeight: '400',
  },
  sectionHeader: {
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
});

export default Home;
