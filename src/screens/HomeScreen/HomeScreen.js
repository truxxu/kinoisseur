import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Navbar from '../../common/Navbar';

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title="Kinoisseur" />
      <View style={styles.container}>
        <Text>HomeScreen</Text>
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

export default HomeScreen;
