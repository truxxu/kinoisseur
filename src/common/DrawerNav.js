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

const DrawerNav = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        activeTintColor: '#252a34',
        itemStyle: styles.itemStyle,
        labelStyle: styles.labelStyle,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="WatchList" component={WatchListScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#eaeaea',
    width: 300,
  },
  itemStyle: {
    marginVertical: 5,
  },
  labelStyle: {
    color: '#252a34',
    fontWeight: 'bold',
  },
});

export default DrawerNav;
