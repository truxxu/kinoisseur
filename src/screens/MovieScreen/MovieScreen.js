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
import play from '../../assets/play.png';
import heart from '../../assets/heart.png';
import eye from '../../assets/eye.png';
import share from '../../assets/share.png';
import netflix from '../../assets/netflix.png';

const WIDTH = Dimensions.get('window').width;

const MovieScreen = ({navigation, route}) => {
  const {_title} = route.params;
  let title = _title || '';

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title={title} _back={true} />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.movieInfo}>
          <Text style={styles.title}>Movie Title (2020)</Text>
          <Text style={styles.text}>Directed by David Lynch</Text>
          <Text style={styles.text}>120 min</Text>
          <TouchableOpacity style={styles.trailerContainer}>
            <Image
              style={styles.trailerImage}
              source={{uri: 'https://i.picsum.photos/id/866/300/200.jpg'}}
            />
            <Image style={styles.playLogo} source={play} />
          </TouchableOpacity>
          <View style={styles.synopsys}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum'
            </Text>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Image style={styles.buttonLogo} source={heart} />
              <Text style={styles.buttonText}>Add to Favourites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image style={styles.buttonLogo} source={eye} />
              <Text style={styles.buttonText}>Add to Watchlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image style={styles.buttonLogo} source={share} />
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image style={styles.buttonLogo} source={netflix} />
              <Text style={styles.buttonText}>Watch on Netflix</Text>
            </TouchableOpacity>
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
    // alignItems: 'center',
    // justifyContent: 'center',
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

export default MovieScreen;
