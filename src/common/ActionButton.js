import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import heart from '../assets/heart.png';
import eye from '../assets/eye.png';
import share from '../assets/share.png';
import netflix from '../assets/netflix.png';

const ActionButton = (props) => {
  const {type} = props;

  const generateButton = () => {
    switch (type) {
      case 'favourite':
        return (
          <TouchableOpacity style={styles.actionButton}>
            <Image style={styles.buttonLogo} source={heart} />
            <Text style={styles.buttonText}>Add to Favourites</Text>
          </TouchableOpacity>
        );
      case 'watchlist':
        return (
          <TouchableOpacity style={styles.actionButton}>
            <Image style={styles.buttonLogo} source={eye} />
            <Text style={styles.buttonText}>Add to Watchlist</Text>
          </TouchableOpacity>
        );
      case 'share':
        return (
          <TouchableOpacity style={styles.actionButton}>
            <Image style={styles.buttonLogo} source={share} />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity style={styles.actionButton}>
            <Image style={styles.buttonLogo} source={netflix} />
            <Text style={styles.buttonText}>Watch on Netflix</Text>
          </TouchableOpacity>
        );
    }
  };

  return generateButton();
};

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#ff2e63',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eaeaea',
    marginLeft: 15,
  },
  buttonLogo: {
    height: 20,
    width: 20,
  },
});

export default ActionButton;
