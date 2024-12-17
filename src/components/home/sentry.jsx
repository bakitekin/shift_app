import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ThemeColor from '../../theme';

const Sentry = ({
  role,
  name,
  shiftType,
  location,
  isToday,
  startTime,
  endTime,
  mazeret,
  talep,
}) => {
  return (
    <View style={styles.container}>
      {/* Genel Bilgiler */}
      <View style={styles.header}>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.row}>
          <Text>{shiftType}</Text>
          <Text> , </Text>
          <Text>{location}</Text>
        </View>
        <View style={[styles.row, styles.marginTop]}>
          <Text style={styles.boldText}>{isToday ? 'Bugün' : 'Yarın'}</Text>
          <Text> , </Text>
          <Text>{startTime}</Text>
          <Text> - </Text>
          <Text>{endTime}</Text>
        </View>
      </View>

      {/* Mazeret veya Talep */}
      {mazeret && (
        <View
          style={[
            styles.talepContainer,
            {backgroundColor: ThemeColor.LIGHTORANGE},
          ]}>
          <View style={styles.talepBoxMazeret}>
            <Text style={[styles.talepText, {color: ThemeColor.RED}]}>
              Talep
            </Text>
          </View>
          <Text style={[styles.talepTextMessage, {color: ThemeColor.RED}]}>
            {mazeret}
          </Text>
        </View>
      )}
      {talep && (
        <View
          style={[
            styles.talepContainer,
            {backgroundColor: ThemeColor.LIGHTPRAMARY},
          ]}>
          <View style={styles.talepBoxTalep}>
            <Text style={[styles.talepText, {color: ThemeColor.TEXTPRIMARY}]}>
              Talep
            </Text>
          </View>
          <Text
            style={[styles.talepTextMessage, {color: ThemeColor.TEXTPRIMARY}]}>
            {talep}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.WHITE,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ThemeColor.BORDERCOLOR,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: ThemeColor.BORDERCOLOR,
    paddingBottom: 10,
    marginBottom: 10,
  },
  role: {
    fontWeight: '300',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    marginTop: 10,
  },
  details: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '500',
  },
  talepContainer: {
    padding: 4,
    paddingLeft: 5,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  talepText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  talepTextMessage: {
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 10,
  },
  talepBoxTalep: {
    padding: 3,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: ThemeColor.BORDERTALEPRIMARY,
  },
  talepBoxMazeret: {
    padding: 3,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: ThemeColor.BADGEORANGE,
  },
  marginTop: {
    marginTop: 6,
  },
});

export default Sentry;
