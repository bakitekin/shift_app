import {StyleSheet} from 'react-native';
import ThemeColor from '../theme';

const DefaultText = StyleSheet.create({
  textLg: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
  },
  softTextLg: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    color: ThemeColor.TEXTGRAY,
  },
});

//make this component available to the app
export default DefaultText;
