import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import Navbar from '../../common/Navbar';
import MovieCard from '../../common/MovieCard';
import OrderModal from '../../common/OrderModal';
import sort2 from '../../assets/sort2.png';

const GenreView = (props) => {
  const {navigation, _title, _movies, isloading, fetchData, bottom} = props,
    [isVisible, setVisible] = useState(false),
    [page, setPage] = useState({num: 1});

  console.log(page.num);

  let title = _title || '',
    movies = _movies || [];

  const pageCount = () => {
    setPage({...page, num: page.num + 1});
  };

  const renderMovieCards = () => {
    if (isloading) {
      return <ActivityIndicator size="large" color="#ff2e63" />;
    } else {
      return (
        <FlatList
          data={movies}
          contentContainerStyle={styles.list}
          renderItem={({item}) => (
            <MovieCard navigation={navigation} data={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            if (!bottom) {
              pageCount();
              fetchData(page.num);
            }
          }}
          onEndReachedThreshold={0.5}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title={title} _back={true} />
      <OrderModal showModal={isVisible} setVisible={setVisible} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Here are some of my recommendations
          </Text>
          <TouchableOpacity onPress={() => setVisible(!isVisible)}>
            <Image style={styles.icon} source={sort2} />
          </TouchableOpacity>
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
  list: {
    alignItems: 'center',
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
  icon: {
    marginTop: 10,
    alignSelf: 'center',
    height: 25,
    width: 25,
  },
});

export default GenreView;
