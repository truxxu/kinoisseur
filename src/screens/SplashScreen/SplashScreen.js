import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        SplashScreen
      </Text>
      <Button
        title="Start using the app"
        onPress={() => navigation.navigate('Home')}
      />
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

export default SplashScreen;
