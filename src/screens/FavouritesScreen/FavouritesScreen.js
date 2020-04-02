import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Navbar from '../../common/Navbar';

const FavouritesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title="My Favourites" _back={true} />
      <View style={styles.container}>
        <Text>FavouritesScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavouritesScreen;
