import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const MovieScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        MovieScreen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default MovieScreen;
