import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import DefaultStyle from '../../styles/defaultStyle';
import Input from '../../components/ui/ınput';
import ShiftStyle from '../../styles/shiftStyle';
import Button from '../../components/ui/button';
import {SHIFTPERSON} from '../../utils/router';

const Shift = ({navigation}) => {
  const [personCount, setPersonCount] = useState('2');
  const [startDate, setStartDate] = useState('01.12.1992');
  const [endDate, setEndDate] = useState('31.12.1992');
  const [shiftPersonCount, setShiftPersonCount] = useState('10');

  const handleProceed = () => {
    // Girilen bilgilerin doğrulanması
    if (!personCount || !startDate || !endDate || !shiftPersonCount) {
      // Hata mesajı gösterilebilir
      return;
    }

    // Navigasyon öncesi gerekli kontroller
    navigation.navigate(SHIFTPERSON, {
      personCount,
      startDate,
      endDate,
      shiftPersonCount,
    });
  };

  return (
    <ScrollView style={DefaultStyle.container}>
      <View>
        <Text style={ShiftStyle.headerText}>Nöbet Hazırlama</Text>
        <Input
          placeholder="01 Aralık 1992"
          title="Başlangıç Tarihi :"
          value={startDate}
          onChangeText={setStartDate}
        />
        <Input
          placeholder="31 Aralık 1992"
          title="Bitiş Tarihi :"
          value={endDate}
          onChangeText={setEndDate}
        />
        <Input
          placeholder="Örneğin: 1-2-3... "
          title="Beraber Nöbet Tutacak Kişi Sayısı :"
          value={personCount}
          onChangeText={setPersonCount}
          keyboardType="numeric"
        />
        <Input
          placeholder="Örneğin: 10"
          title="Nöbet Tutacak Kişi Sayısı :"
          value={shiftPersonCount}
          onChangeText={setShiftPersonCount}
          keyboardType="numeric"
        />

        <Button onPress={handleProceed} title="İlerle" status="info" />
      </View>
    </ScrollView>
  );
};

export default Shift;
