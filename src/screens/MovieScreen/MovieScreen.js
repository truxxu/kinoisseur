import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Navbar from '../../common/Navbar';

const MovieScreen = ({navigation, route}) => {
  const {_title} = route.params;
  let title = _title || '';

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title={title} _back={true} />
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
