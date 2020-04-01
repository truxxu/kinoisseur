import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavouritesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>FavouritesScreen</Text>
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

export default FavouritesScreen;
