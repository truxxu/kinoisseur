import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import Navbar from '../../common/Navbar';
import MovieCard from '../../common/MovieCard';
import OrderModal from '../../common/OrderModal';

const WIDTH = Dimensions.get('window').width;

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
          contentContainerStyle={styles.list}
          renderItem={({item}) => (
            <MovieCard navigation={navigation} data={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  };

  const generateModal = () => {
    return (
      <Modal isVisible={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Sort by:</Text>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalText}>Highest score</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalText}>Lowest score</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalText}>Oldest first</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalText}>Newest first</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalText}>Longest first</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalText}>Shortest first</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalText}>Title A to Z</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title={title} _back={true} />
      {generateModal()}
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Here are some of my recommendations
          </Text>
          <Text>Success</Text>
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
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
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
  modalText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff2e63',
    textAlign: 'center',
  },
  modalButton: {
    marginVertical: 10,
    borderColor: '#ff2e63',
    borderBottomWidth: 2,
    width: WIDTH * 0.9,
  },
});

export default GenreView;
