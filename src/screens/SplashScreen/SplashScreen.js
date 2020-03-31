import React, { useEffect, useRef }  from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated
} from 'react-native';
import logo from '../../assets/clapperboard.png'

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    fadeIn();
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  };


  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingView,
          {
            opacity: fadeAnim
          }
        ]}
      >
        <Image
          style={styles.logo}
          source={logo}
        />

        <Text style={styles.title}>
          Kinoisseur
        </Text>
      </Animated.View>
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

  fadingView: {
    alignItems: 'center',
    justifyContent: 'center',
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
