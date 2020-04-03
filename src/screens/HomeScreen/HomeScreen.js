import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

import Navbar from '../../common/Navbar';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title="Kinoisseur" />
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          onPress={() => navigation.navigate('Genre')}
          title="Learn More"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
