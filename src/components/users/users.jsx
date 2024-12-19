import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import ThemeColor from '../../theme';
import {LeftSVG} from '../../assets/svg/Icons';
import {useNavigation} from '@react-navigation/native';
import {PERSONELDETAY} from '../../utils/router';

// Users component
const Users = () => {
  const navigation = useNavigation();
  // const [modalVisible, setModalVisible] = useState(false);
  const personelData = [
    {
      adSoyad: 'Ali Yılmaz',
      rutbe: 'Teğmen',
      nobetPuani: 85,
      nobetYeri: 'Karakol 1',
      nobetSaatleri: '08:00 - 16:00',
      nobetGunleri: ['Pazartesi', 'Çarşamba', 'Cuma'],
    },
    {
      adSoyad: 'Ayşe Demir',
      rutbe: 'Üstçavuş',
      nobetPuani: 92,
      nobetYeri: 'Karakol 2',
      nobetSaatleri: '16:00 - 00:00',
      nobetGunleri: ['Salı', 'Perşembe', 'Cumartesi'],
    },
    {
      adSoyad: 'Mehmet Kara',
      rutbe: 'Yüzbaşı',
      nobetPuani: 88,
      nobetYeri: 'Karakol 3',
      nobetSaatleri: '00:00 - 08:00',
      nobetGunleri: ['Pazartesi', 'Çarşamba', 'Cuma'],
    },
    {
      adSoyad: 'Fatma Aksoy',
      rutbe: 'Astsubay',
      nobetPuani: 75,
      nobetYeri: 'Karakol 4',
      nobetSaatleri: '08:00 - 16:00',
      nobetGunleri: ['Cumartesi', 'Pazar'],
    },
    {
      adSoyad: 'Ahmet Yücel',
      rutbe: 'Başçavuş',
      nobetPuani: 81,
      nobetYeri: 'Karakol 1',
      nobetSaatleri: '16:00 - 00:00',
      nobetGunleri: ['Pazartesi', 'Salı', 'Perşembe'],
    },
    {
      adSoyad: 'Zehra Kılıç',
      rutbe: 'Binbaşı',
      nobetPuani: 95,
      nobetYeri: 'Karakol 2',
      nobetSaatleri: '00:00 - 08:00',
      nobetGunleri: ['Çarşamba', 'Cuma', 'Pazar'],
    },
    {
      adSoyad: 'Osman Çelik',
      rutbe: 'Teğmen',
      nobetPuani: 78,
      nobetYeri: 'Karakol 3',
      nobetSaatleri: '08:00 - 16:00',
      nobetGunleri: ['Salı', 'Cumartesi'],
    },
    {
      adSoyad: 'Elif Şahin',
      rutbe: 'Üsteğmen',
      nobetPuani: 89,
      nobetYeri: 'Karakol 4',
      nobetSaatleri: '16:00 - 00:00',
      nobetGunleri: ['Pazartesi', 'Çarşamba', 'Pazar'],
    },
    {
      adSoyad: 'Hakan Yıldız',
      rutbe: 'Kıdemli Başçavuş',
      nobetPuani: 87,
      nobetYeri: 'Karakol 1',
      nobetSaatleri: '00:00 - 08:00',
      nobetGunleri: ['Cuma', 'Cumartesi'],
    },
    {
      adSoyad: 'Selin Özdemir',
      rutbe: 'Astsubay Çavuş',
      nobetPuani: 82,
      nobetYeri: 'Karakol 2',
      nobetSaatleri: '08:00 - 16:00',
      nobetGunleri: ['Salı', 'Perşembe', 'Pazar'],
    },
  ];

  // Baş harflerini almak için fonksiyon
  function getInitials(adSoyad) {
    const nameParts = adSoyad.split(' ');
    const initials = nameParts
      .map(part => part.charAt(0).toUpperCase())
      .join('');
    return initials;
  }

  // Nöbet günlerini sayılarla almak için fonksiyon
  function getDutyDays(dutyDays) {
    const daysMapping = {
      Pazartesi: 1,
      Salı: 2,
      Çarşamba: 3,
      Perşembe: 4,
      Cuma: 5,
      Cumartesi: 6,
      Pazar: 7,
    };

    return dutyDays.map(day => ({
      gunIsmi: day,
      gunNumarasi: daysMapping[day],
    }));
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Personel</Text>
        </View>
        <View style={styles.personelCount}>
          <Text style={styles.personelCountText}>
            {personelData.length} Personel
          </Text>
        </View>
      </View>

      {/* Personel List */}
      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyListText}>Personel Listesi Boş</Text>
        }
        data={personelData}
        keyExtractor={item => item.adSoyad}
        renderItem={({item, index}) => {
          const dutyDays = getDutyDays(item.nobetGunleri);
          const dutyDaysNumbers = dutyDays
            .map(day => day.gunNumarasi)
            .join(', ');

          return (
            <Pressable
              style={styles.card}
              key={index}
              onPress={() => {
                navigation.navigate(PERSONELDETAY);
              }}>
              <View style={styles.cardContent}>
                <View style={styles.cardLeft}>
                  <View style={styles.initialsBox}>
                    <Text style={styles.initialsText}>
                      {getInitials(item.adSoyad)}
                    </Text>
                  </View>
                </View>
                <View style={styles.cardMiddle}>
                  <Text style={styles.name}>{item.adSoyad}</Text>
                  <Text style={styles.rank}>{item.rutbe}</Text>
                </View>
                <View style={styles.cardRight}>
                  <View style={styles.dutyScoreBox}>
                    <Text style={styles.dutyScoreText}>
                      {item.nobetPuani} Puan
                    </Text>
                    <LeftSVG />
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR2,
    backgroundColor: ThemeColor.light.WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    height: 50,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR2,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
  },
  personelCount: {
    backgroundColor: ThemeColor.light.LIGHTPRAMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  personelCountText: {
    color: ThemeColor.light.TEXTPRIMARY,
    fontSize: 14,
    fontWeight: '500',
  },
  selectAllButton: {
    flexDirection: 'row',
    backgroundColor: ThemeColor.light.LIGHTGREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
    gap: 4,
  },
  selectAllText: {
    color: ThemeColor.light.GREEN,
    fontSize: 14,
    fontWeight: '500',
  },
  card: {
    height: 70,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR2,
  },
  cardContent: {
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'space-between',
  },
  initialsBox: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: ThemeColor.light.LIGHTPRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    color: ThemeColor.light.TEXTPRIMARY,
    fontSize: 16,
    fontWeight: '600',
  },
  cardMiddle: {
    gap: 5,
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  rank: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
  },
  cardRight: {},
  dutyScoreBox: {
    backgroundColor: ThemeColor.light.LIGHTORANGE,
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    padding: 8,
  },
  dutyScoreText: {
    fontSize: 14,
    fontWeight: '500',
    color: ThemeColor.light.RED,
  },
});

export default Users;
