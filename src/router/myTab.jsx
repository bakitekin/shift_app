/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CALENDAR, HOME, NOTIFICATION, PROFILE, SHIFT} from '../utils/router';
import {Home, Notification, Profile, Shift, Calendar} from '../screens/index';
import ThemeColor from '../theme';
import TabBarIcons from '../utils/tabbarıcon';
import TabBarButton from '../utils/taBarButton';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          TabBarIcons(route, focused, color, size),
        tabBarActiveTintColor: ThemeColor.green,
        tabBarInactiveTintColor: ThemeColor.darkGray,
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabBarStyle: {
          backgroundColor: ThemeColor.white,
          borderRadius: 100,
          elevation: 0,
          shadowOpacity: 0.2,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          paddingBottom: 10,
        },
        headerShown: false,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={PROFILE} component={Profile} />
      <Tab.Screen
        options={{
          tabBarButton: props => (
            <TabBarButton onPress={() => navigation.navigate(SHIFT)} />
          ),
          tabBarStyle: {
            backgroundColor: ThemeColor.red,
            width: 100,
            borderRadius: 50,
            elevation: 0,
            shadowOpacity: 0.2,
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 0,
          },
        }}
        name={SHIFT}
        component={Shift}
      />
      <Tab.Screen name={CALENDAR} component={Calendar} />
      <Tab.Screen name={NOTIFICATION} component={Notification} />
    </Tab.Navigator>
  );
}

export default MyTabs;
