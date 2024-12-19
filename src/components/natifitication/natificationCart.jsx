import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  BellSVG,
  CheckDrownSVG,
  CheckSVG,
  SoftBellSVG,
  XSVG,
} from '../../assets/svg/Icons';
import ThemeColor from '../../theme';

const NotificationCard = ({
  type = 'change', // 'change' veya 'excuse'
  status = 'pending', // 'pending', 'rejected', 'approved'
  date,
  time,
  personName,
  personTitle,
}) => {
  // Status badge konfigürasyonları
  const statusConfig = {
    pending: {
      text: 'Beklemede',
      textColor: ThemeColor.light.PRIMARY,
      bgColor: ThemeColor.light.LIGHTGRAY,
      icon: <CheckDrownSVG />,
    },
    rejected: {
      text: 'Reddedildi',
      textColor: ThemeColor.light.NEWRED,
      bgColor: ThemeColor.light.LIGHTORANGE,
      icon: <XSVG stroke={ThemeColor.light.RED} />,
    },
    approved: {
      text: 'Onaylandı',
      textColor: ThemeColor.light.GREEN,
      bgColor: ThemeColor.light.LIGHTGREEN,
      icon: <CheckSVG stroke={ThemeColor.light.GREEN} />,
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  type === 'change'
                    ? ThemeColor.light.LIGHTGRAY
                    : ThemeColor.light.LIGHTORANGE,
              },
            ]}>
            {type === 'change' ? (
              <BellSVG
                width={24}
                height={24}
                color={ThemeColor.light.PRIMARY}
              />
            ) : (
              <BellSVG width={24} height={24} color={ThemeColor.light.ORANGE} />
            )}
          </View>
          <Text style={styles.title}>
            {type === 'change' ? 'Nöbet Değişikliği' : 'Nöbet Mazereti'}
          </Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            {backgroundColor: currentStatus.bgColor},
          ]}>
          <Text style={[styles.statusText, {color: currentStatus.textColor}]}>
            {currentStatus.text} {currentStatus.icon}
          </Text>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {date},<Text style={styles.timeText}> {time}</Text>
        </Text>
      </View>

      <Text style={styles.description}>
        {personName} ({personTitle}){' '}
        {type === 'change'
          ? 'Nöbet değişikliği talebinde bulundu.'
          : 'Nöbet Mazereti talebinde bulundu.'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.light.BACKGROUND,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR2,
    shadowColor: ThemeColor.light.SHADOW,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR2,
    height: 60,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: ThemeColor.light.TEXT,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  dateContainer: {
    marginBottom: 8,
  },
  dateText: {
    fontSize: 30,
    fontWeight: '600',
    color: ThemeColor.light.TEXT,
  },
  timeText: {
    fontSize: 14,
    color: ThemeColor.light.TEXTLIGHTGRAY,
    fontWeight: '400',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: ThemeColor.light.TEXTLIGHTGRAY,
    lineHeight: 24,
  },
});

export default NotificationCard;
