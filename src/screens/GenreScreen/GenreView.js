import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Navbar from '../../common/Navbar';
import MovieCard from '../../common/MovieCard';

const GenreView = (props) => {
  const {navigation, _title, _movies, isloading} = props;
  let title = _title || '',
    movies = _movies || [];

  const renderMovieCards = () => {
    if (isloading) {
      return <ActivityIndicator size="large" color="#ff2e63" />;
    } else {
      return (
        <FlatList
          data={movies}
          renderItem={({item}) => <MovieCard navigation={navigation} />}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title={title} _back={true} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Here are some of my recommendations
          </Text>
        </View>
        {renderMovieCards()}
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

export default GenreView;
