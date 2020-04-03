import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const GenreCard = ({navigation, _title}) => {
  let title = _title || '';

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Genre', {_title: title})}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08d9d6',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 0.4,
    height: 75,
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
  },
});

export default GenreCard;
