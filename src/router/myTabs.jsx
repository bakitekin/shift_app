import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Pressable} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {HOME, NEWUSERS, PERSONEL, PROFILE, TALEPLER} from '../utils/router';
import ThemeColor from '../theme';
import {Home, Personel, Profile, Talepler} from '../screens';

import {
  HomeSVG,
  UserSVG,
  UsersSVG,
  NotificationsSVG,
  PlusSVG,
} from '../assets/svg/Icons/index';
import {useNavigation} from '@react-navigation/native';

const MyTabs = () => {
  const navigaiton = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    let IconComponent = null;
    const isSelected = routeName === selectedTab;

    switch (routeName) {
      case HOME:
        IconComponent = <HomeSVG />;
        break;
      case PERSONEL:
        IconComponent = <UsersSVG />;
        break;
      case NEWUSERS:
        IconComponent = <PlusSVG />;
        break;
      case TALEPLER:
        IconComponent = <NotificationsSVG />;
        break;
      case PROFILE:
        IconComponent = <UserSVG />;
        break;
      default:
        IconComponent = null;
    }

    return React.cloneElement(IconComponent, {
      stroke: isSelected ? ThemeColor.PRIMARY : ThemeColor.GRAY, // Aktif durumda renk değişimi
      fill: isSelected ? ThemeColor.PRIMARY : 'none', // Gerekirse dolgu rengi
    });
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <Pressable onPress={() => navigate(routeName)} style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
        <Text
          style={{
            color:
              routeName === selectedTab ? ThemeColor.PRIMARY : ThemeColor.GRAY,

            fontSize: 12,
            marginTop: 5,
            marginBottom: 5,
          }}>
          {routeName === HOME
            ? 'Anasayfa'
            : routeName === PERSONEL
            ? 'Personel'
            : routeName === TALEPLER
            ? 'Talepler'
            : routeName === PROFILE
            ? 'Profil'
            : ''}
        </Text>
      </Pressable>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      shadowStyle={styles.shawdow}
      borderWidth={0.3}
      borderColor={ThemeColor.GRAY}
      height={70}
      circleWidth={55}
      bgColor={ThemeColor.WHITE}
      tabBarActiveBackgroundColor={ThemeColor.PRIMARY}
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
      }}
      renderCircle={({selectedTab, navigate}) => (
        <TouchableOpacity
          style={styles.btnCircleUp}
          onPress={() => navigate(NEWUSERS)}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate(NEWUSERS)}>
            <PlusSVG strokeColor={ThemeColor.WHITE} width={35} height={35} />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={HOME}
        position="LEFT"
        component={() => <Home />}
      />
      <CurvedBottomBar.Screen
        name={PERSONEL}
        position="LEFT"
        component={() => <Personel />}
      />
      <CurvedBottomBar.Screen
        name={TALEPLER}
        component={() => <Talepler />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name={PROFILE}
        component={() => <Profile />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: ThemeColor.WHITE,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  btnCircleUp: {
    width: 58,
    height: 58,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColor.PRIMARY,
    bottom: 18,
    shadowColor: ThemeColor.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default MyTabs;
