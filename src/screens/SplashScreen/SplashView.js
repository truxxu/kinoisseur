import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import logo from '../../assets/film-reel.png';

const SplashView = (props) => {
  const {animation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingView,
          {
            opacity: animation,
          },
        ]}>
        <Image style={styles.logo} source={logo} />

        <Text style={styles.title}>Kinoisseur</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#08d9d6',
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

export default SplashView;
