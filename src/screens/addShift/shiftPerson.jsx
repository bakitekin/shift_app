import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import DefaultStyle from '../../styles/defaultStyle';
import Input from '../../components/ui/ınput';
import ShiftStyle from '../../styles/shiftStyle';
import Button from '../../components/ui/button';
import {HOME, PROFILE} from '../../utils/router';
import ThemeColor from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShiftPerson = ({navigation, route}) => {
  const [personCount, setPersonCount] = useState('');
  const [persons, setPersons] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Önceki ekrandan gelen parametreleri al
  const {startDate, endDate, shiftPersonCount} = route?.params || {};

  const handleProceed = () => {
    if (persons.length === 0) {
      navigation.navigate(PROFILE);
      return;
    }

    navigation.navigate(HOME, {
      persons,
      startDate,
      endDate,
      shiftPersonCount,
    });
  };

  const handleAddPerson = () => {
    const trimmedName = personCount.trim();
    if (!trimmedName) {
      Alert.alert('Uyarı', 'Lütfen bir isim girin.');
      return;
    }

    if (editingIndex !== null) {
      // Düzenleme modu
      const updatedPersons = [...persons];
      updatedPersons[editingIndex] = trimmedName;
      setPersons(updatedPersons);
      setEditingIndex(null);
    } else {
      // Yeni kişi ekleme
      if (persons.includes(trimmedName)) {
        Alert.alert('Uyarı', 'Bu isim zaten listede mevcut.');
        return;
      }
      setPersons([...persons, trimmedName]);
    }

    setPersonCount('');
  };

  const handleEditPerson = index => {
    setPersonCount(persons[index]);
    setEditingIndex(index);
  };

  const handleDeletePerson = index => {
    Alert.alert(
      'Silme Onayı',
      'Bu kişiyi listeden silmek istediğinize emin misiniz?',
      [
        {text: 'Vazgeç', style: 'cancel'},
        {
          text: 'Sil',
          style: 'destructive',
          onPress: () => {
            const updatedPersons = persons.filter((_, i) => i !== index);
            setPersons(updatedPersons);
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={DefaultStyle.container}>
      <View>
        <Text style={ShiftStyle.headerText}>Nöbet Tutacak Kişiler</Text>
        <View style={ShiftStyle.rowBetween}>
          <View style={{flex: 1, marginRight: 10}}>
            <Input
              title="İsim Ekleyin :"
              placeholder="İsim Girin"
              value={personCount}
              onChangeText={setPersonCount}
            />
          </View>

          <Button
            style={ShiftStyle.buttonChange}
            onPress={handleAddPerson}
            title={
              editingIndex !== null ? (
                <MaterialCommunityIcons
                  name="update"
                  size={24}
                  color={ThemeColor.white}
                />
              ) : (
                <AntDesign name="adduser" size={24} color={ThemeColor.white} />
              )
            }
          />
        </View>

        {persons.map((person, index) => (
          <View key={index} style={ShiftStyle.addPersonContainer}>
            <Text style={ShiftStyle.personItem}>
              {index + 1}. {person}
            </Text>
            <View style={ShiftStyle.personItemList}>
              <TouchableOpacity onPress={() => handleEditPerson(index)}>
                <FontAwesome name="edit" size={24} color={ThemeColor.purple} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeletePerson(index)}
                style={{marginLeft: 10}}>
                <FontAwesome name="trash" size={24} color={ThemeColor.red} />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <Button
          onPress={handleProceed}
          title="İlerle"
          status="info"
          disabled={persons.length === 0}
        />
      </View>
    </ScrollView>
  );
};

export default ShiftPerson;
