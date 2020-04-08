import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import star from '../assets/star.png';
import eye from '../assets/eye.png';
import heart from '../assets/heart.png';

const WIDTH = Dimensions.get('window').width,
  HEIGHT = Dimensions.get('window').height;

const MovieCard = (props) => {
  const {navigation, data} = props;

  let title = data.title || '',
    text = data.synopsys || '',
    rating = data.rating || 0;

  const shortener = (string, length) => {
    if (string.length > length - 1) {
      return string.substring(0, length) + '...';
    } else {
      return string;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Movie', {data: data})}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>{shortener(title, 35)}</Text>
        <View style={styles.ratingContainer}>
          <Image style={styles.icon} source={star} />
          <Text style={styles.ratingText}>{rating}/5</Text>
          <Image style={styles.statusIcon} source={eye} />
          <Image style={styles.statusIcon} source={heart} />
          <View tyle={styles.statusContainer} />
          <View style={styles.statusContainer} />
        </View>
      </View>
      <Text style={styles.text}>{shortener(text, 170)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff2e63',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.2,
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
  headingContainer: {
    paddingHorizontal: 20,
    width: WIDTH * 0.9,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    color: '#eaeaea',
  },
  text: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#eaeaea',
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#eaeaea',
  },
  icon: {
    height: 14,
    width: 14,
    marginRight: 5,
  },
  statusIcon: {
    height: 14,
    width: 14,
    marginLeft: 10,
  },
});

export default MovieCard;
