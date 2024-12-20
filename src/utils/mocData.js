const MocData = () => {
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
};

export default MocData;
