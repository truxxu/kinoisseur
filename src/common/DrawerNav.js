import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import WatchListScreen from '../screens/WatchListScreen/WatchListScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import FavouritesScreen from '../screens/FavouritesScreen/FavouritesScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const DrawerNav = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        activeTintColor: '#ff2e63',
        activeBackgroundColor: 'yellow',
        itemStyle: styles.itemStyle,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="WathcList" component={WatchListScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#08d9d6',
    width: 240,
  },
  itemStyle: {
    marginVertical: 5,
  },
});

export default DrawerNav;
