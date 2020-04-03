import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import Navbar from '../../common/Navbar';
import GenreCard from '../../common/GenreCard';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title="Kinoisseur" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <GenreCard navigation={navigation} _title="Action" />
        </ScrollView>
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
  content: {
    flex: 8,
    padding: 5,
  },
});

export default HomeScreen;
