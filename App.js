import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNav from './src/common/DrawerNav';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
