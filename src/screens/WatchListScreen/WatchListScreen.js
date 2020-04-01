import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WatchList = (props) => {
  return (
    <View style={styles.container}>
      <Text>WatchList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WatchList;
