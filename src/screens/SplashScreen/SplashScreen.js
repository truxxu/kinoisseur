import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import SplashView from './SplashView';

const SplashScreen = ({navigation}) => {
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
      useNativeDriver: true,
    }).start();
  };

  return <SplashView animation={fadeAnim} />;
};

export default SplashScreen;
