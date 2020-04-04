import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const GenreCard = ({navigation, _title, _url}) => {
  let title = _title || '',
    url = _url || '';

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Genre', {_title: title})}>
      <Image style={styles.logo} source={{uri: url}} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252a34',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
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

  text: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    color: '#eaeaea',
    position: 'absolute',
    top: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },

  logo: {
    width: WIDTH * 0.4,
    height: 75,
    borderRadius: 20,
    opacity: 0.75,
  },
});

export default GenreCard;
