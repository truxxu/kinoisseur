import React, { useEffect }  from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Kinoisseur
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#08d9d6'
  },

  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 55,
    color: '#ff2e63',
  }

});

export default SplashScreen;
