import {StyleSheet} from 'react-native';
import ThemeColor from '../theme';

const DefaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: ThemeColor.LIGHTGRAY,
  },
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItems: {
    alignItems: 'center',
  },
  justifyContent: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    color: ThemeColor.black,
    fontWeight: 'bold',
    shadowColor: ThemeColor.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  label: {
    padding: 10,
    color: ThemeColor.black,
    fontWeight: '500',
    marginTop: 10,
  },
  padding: {
    padding: 10,
  },
  ınput: {
    flex: 1,
  },
  ınputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DefaultStyle;
