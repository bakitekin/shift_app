import {StyleSheet} from 'react-native';
import ThemeColor from '../theme';

const ShiftStyle = StyleSheet.create({
  headerText: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: ThemeColor.black,
    shadowColor: ThemeColor.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  personItem: {
    fontSize: 15,
    fontWeight: '500',
    color: ThemeColor.black,
    shadowColor: ThemeColor.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    textAlign: 'center',
  },
  addPersonContainer: {
    backgroundColor: ThemeColor.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  personItemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  rowBetween: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: ThemeColor.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: ThemeColor.darkGreen,
  },
  buttonChange: {
    width: 60,
    height: 60,
    bottom: -20,
  },
});

export default ShiftStyle;
