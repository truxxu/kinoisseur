import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import GenreScreen from './src/screens/GenreScreen/GenreScreen';
import MovieScreen from './src/screens/MovieScreen/MovieScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Genre" component={GenreScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
