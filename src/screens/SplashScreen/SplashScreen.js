import React, { useEffect }  from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/clapperboard.png')}
      />

      <Text style={styles.title}>
        Kinoisseur
      </Text>
    </SafeAreaView>
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
  },

  logo: {
    width: 100,
    height: 100,
  },

});

export default SplashScreen;
