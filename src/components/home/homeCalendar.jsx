import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ThemeColor from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {MAZERETGUNLERI} from '../../utils/router';

// create a component
const HomeCalendar = () => {
  const navigaiton = useNavigation();

  const customDays = ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz']; // Monday first

  // Get today's date and the current month
  const today = new Date();
  const currentMonth = today.getMonth(); // Get the current month (0-indexed)

  // Get the number of days in the current month
  const lastDayOfCurrentMonth = new Date(
    today.getFullYear(),
    currentMonth + 1,
    0,
  ).getDate();

  // Calculate the starting day of the current month (1st day of the month)
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    currentMonth,
    1,
  ).getDay();
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start

  // Create the days array with empty slots for the days before the 1st
  const daysWithEmptySlots = [
    ...Array(adjustedFirstDay).fill(null), // Empty slots before the 1st
    ...Array.from({length: lastDayOfCurrentMonth}, (_, index) => index + 1), // Dates
  ];

  const totalBoxes = Math.ceil(daysWithEmptySlots.length / 7) * 7;
  const emptyBoxesNeeded = totalBoxes - daysWithEmptySlots.length;
  const allBoxes = [
    ...daysWithEmptySlots,
    ...Array(emptyBoxesNeeded).fill(null),
  ];

  const isPastDate = box => {
    return box < today.getDate(); // Mark dates earlier than today as past dates
  };

  const isCurrentDate = box => {
    return box === today.getDate(); // Check if the day is today
  };

  // Placeholder for "excuse" and "request" logic
  // This can be customized with actual logic or data
  const isExcused = box => {
    // Example: Assume 10th and 20th are excused
    return box === 30;
  };

  const isRequested = box => {
    // Example: Assume 5th and 15th are requested
    return box === 18 || box === 26;
  };

  return (
    <View style={styles.container}>
      <View style={styles.daysContainer}>
        {customDays.map((day, index) => (
          <Text key={index} style={styles.dayText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.datesContainer}>
        {allBoxes.map((day, index) => (
          <TouchableOpacity
            onPress={() => navigaiton.navigate(MAZERETGUNLERI, {day: day})}
            key={index}
            style={[
              styles.box,
              day === null && {backgroundColor: ThemeColor.light.LIGHTGRAY},
              isCurrentDate(day) && {backgroundColor: ThemeColor.light.BLACK}, // Current date
              isExcused(day) && {backgroundColor: ThemeColor.light.ORANGE}, // Excused date
              isRequested(day) && {backgroundColor: ThemeColor.light.PRIMARY}, // Requested date
            ]}
            disabled={day === null} // Disable touch for empty boxes
          >
            {day ? (
              <Text
                style={[
                  styles.dateText,
                  isPastDate(day) && {color: ThemeColor.light.GRAY},
                  isExcused(day) && {color: ThemeColor.light.WHITE},
                  isRequested(day) && {color: ThemeColor.light.WHITE},
                  isCurrentDate(day) && {color: ThemeColor.light.WHITE},
                  isCurrentDate(day) && {borderWidth: 0},
                  day === null && {color: 'transparent'},
                ]}>
                {day}
              </Text>
            ) : (
              <View /> // Empty slot for the days before the 1st or for extra slots
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.light.WHITE,
    width: '100%',
    height: 350,
    borderRadius: 12,
    marginTop: 5,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  dayText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 18,
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  box: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ThemeColor.light.BORDERCOLOR,
    borderRadius: 8,
    margin: 4,
  },
  dateText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default HomeCalendar;
