import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import logo from '../assets/account.png';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.headerText}>User</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#08d9d6',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    marginLeft: 20,
    color: '#eaeaea',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default CustomDrawer;
