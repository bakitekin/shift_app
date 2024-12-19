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
import HomeCalendar from '../../components/home/homeCalendar';
import Sentry from '../../components/home/sentry';
import {DefaultStyle, DefaultText} from '../../styles';
import {CheckDrownSVG, CalendarSVG} from '../../assets/svg/Icons/index';

const Home = () => {
  // Tarih bilgisi formatlama
  const getFormattedDate = () => {
    const date = new Date();

    const days = [
      'Pazar',
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
    ];
    const months = [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ];

    const dayName = days[date.getDay()]; // Haftanın günü
    const day = date.getDate(); // Gün
    const monthName = months[date.getMonth()]; // Ay

    return {dayName, day, monthName};
  };

  const {dayName, day, monthName} = getFormattedDate();

  // Örnek nöbetçiler
  const sentries = [
    {
      role: 'J.Per.Asb.Üçvş.',
      name: 'Süleyman UĞUR',
      shiftType: 'Nöbetçi Asb.',
      location: 'Nizamiye Nöbetçisi',
      isToday: true,
      startTime: '09:00',
      endTime: '09:00',
      talep: 'Nöbet Değişikliği Talebi Oldu!',
    },
    {
      role: 'J.Asb.Kd.Üçvş.',
      name: 'Serdar ŞENGÜL',
      shiftType: 'Nöbetçi Asb.',
      location: 'Nizamiye Nöbetçisi',
      isToday: true,
      startTime: '08:00',
      endTime: '16:00',
      mazeret: 'Nöbet Mazereti Talebi Oldu!',
      talep: 'Nöbet Değişikliği Talebi Oldu!',
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
          <Text style={DefaultText.textLg}>
            Bugün, {day} {monthName}
          </Text>
          <TouchableOpacity style={styles.dropdown}>
            <CalendarSVG width={20} height={20} />
            <Text style={styles.dropdownText}>{monthName}</Text>
            <CheckDrownSVG width={20} height={20} />
          </TouchableOpacity>
        </View>

        {/* Takvim */}
        <HomeCalendar />

        {/* Nöbetçiler */}
        <View style={styles.sectionHeader}>
          <Text style={DefaultText.softTextLg}>Nöbetçiler</Text>
        </View>
        <ScrollView>
          <View style={{marginBottom: 30}}>
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
              />
            ))}
          </View>
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
    backgroundColor: ThemeColor.light.WHITE,
    width: 140,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dropdownText: {
    fontSize: 16,
    color: ThemeColor.light.BLACK,
    fontWeight: '400',
  },
  sectionHeader: {
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
});

export default Home;
