import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Navbar from '../../common/Navbar';
import ActionButton from '../../common/ActionButton';
import play from '../../assets/play.png';

const WIDTH = Dimensions.get('window').width;

const MovieScreen = ({navigation, route}) => {
  const {data} = route.params;
  let title = data.title || '',
    director = data.director || '',
    year = data.year || '',
    duration = data.duration || '',
    synopsys = data.synopsys || '',
    url = data.url || '';

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title={title} _back={true} />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.movieInfo}>
          <Text style={styles.title}>
            {title} ({year})
          </Text>
          <Text style={styles.text}>Directed by {director}</Text>
          <Text style={styles.text}>{duration} min</Text>
          <TouchableOpacity style={styles.trailerContainer}>
            <Image style={styles.trailerImage} source={{uri: url}} />
            <Image style={styles.playLogo} source={play} />
          </TouchableOpacity>
          <View style={styles.synopsys}>
            <Text style={styles.text}>{synopsys}</Text>
          </View>
          <View style={styles.actionsContainer}>
            <ActionButton type="favourite" />
            <ActionButton type="watchlist" />
            <ActionButton type="share" />
            <ActionButton type="netflix" />
          </View>
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
  movieInfo: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: WIDTH * 0.9,
    margin: 7.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#252a34',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#252a34',
  },
  text: {
    fontSize: 16,
    color: '#252a34',
  },
  trailerContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailerImage: {
    height: 200,
    width: 300,
    opacity: 0.6,
  },
  playLogo: {
    height: 75,
    width: 75,
    position: 'absolute',
  },
  actionsContainer: {
    marginVertical: 20,
  },
});

export default MovieScreen;
