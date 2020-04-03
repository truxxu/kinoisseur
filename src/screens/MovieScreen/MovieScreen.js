import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Navbar from '../../common/Navbar';

const MovieScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title="Movie" _back={true} />
      <View style={styles.container}>
        <Text>MovieScreen</Text>
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

export default MovieScreen;
