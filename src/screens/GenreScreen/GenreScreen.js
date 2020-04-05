import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';

import Navbar from '../../common/Navbar';
import MovieCard from '../../common/MovieCard';

const GenreScreen = ({navigation, route}) => {
  const {_title} = route.params;
  let title = _title || '';

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title={title} _back={true} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Here are some of my recommendations
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}>
          <MovieCard navigation={navigation} />
          <MovieCard navigation={navigation} />
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
  scrollview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ff2e63',
    textAlign: 'center',
  },
});

export default GenreScreen;
