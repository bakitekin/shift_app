import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME, PERSONEL, PROFILE, SHIFT, TALEPLER} from '../utils/router';
import {Home, Profile} from '../screens/index';
import ThemeColor from '../theme';
import {StyleSheet} from 'react-native';
import Personel from '../screens/personel/personel';
import Talepler from '../screens/talepler';
import AddShift from '../screens/addShift';

const Tab = createBottomTabNavigator();

function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: ThemeColor.PRIMARY,
        tabBarInactiveTintColor: ThemeColor.TEXTGRAY,
        tabBarStyle: styles.container,
        headerShown: false,
      }}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={PERSONEL} component={Personel} />
      <Tab.Screen name={SHIFT} component={AddShift} />
      <Tab.Screen name={TALEPLER} component={Talepler} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.WHITE,
    borderTopWidth: 1,
    borderColor: ThemeColor.BORDERCOLOR,
    height: 80,
  },
});

export default MyTabs;
