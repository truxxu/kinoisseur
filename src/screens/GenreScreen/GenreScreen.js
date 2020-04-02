import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Navbar from '../../common/Navbar';

const GenreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} />
      <View style={styles.container}>
        <Text>GenreScreen</Text>
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

export default GenreScreen;
