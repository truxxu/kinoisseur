import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';

import Navbar from '../../common/Navbar';
import GenreCard from '../../common/GenreCard';

const WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const _data = [
    {
      title: 'Action',
      url: 'https://i.picsum.photos/id/237/300/200.jpg',
    },
    {
      title: 'Romance',
      url: 'https://i.picsum.photos/id/200/300/200.jpg',
    },
    {
      title: 'Comedy',
      url: 'https://i.picsum.photos/id/220/300/200.jpg',
    },
    {
      title: 'Sci-Fi',
      url: 'https://i.picsum.photos/id/110/300/200.jpg',
    },
    {
      title: 'Drama',
      url: 'https://i.picsum.photos/id/222/300/200.jpg',
    },
  ];
  const data = _data || [];

  const generateCards = () => {
    const cards = data.map((item, idx) => {
      return (
        <GenreCard
          key={idx}
          navigation={navigation}
          _title={item.title}
          _url={item.url}
        />
      );
    });

    if (data.length % 2 === 1) {
      return cards.concat(<View key={data.length} style={styles.dummycard} />);
    } else {
      return cards;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigation={navigation} _title="Kinoisseur" />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            What would you like to watch today?
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}>
          {generateCards()}
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
  dummycard: {
    width: WIDTH * 0.4,
    height: 75,
    margin: 7.5,
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

export default HomeScreen;
