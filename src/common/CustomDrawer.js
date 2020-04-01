import React from 'react';
import {StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        // onPress={() => Linking.openUrl('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});

export default CustomDrawer;
