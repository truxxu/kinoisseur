import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  ActivityIndicator,
} from 'react-native';

import Navbar from '../../common/Navbar';
import GenreCard from '../../common/GenreCard';

const WIDTH = Dimensions.get('window').width;

const HomeView = (props) => {
  const {navigation, isloading, data} = props;

  const generateCards = () => {
    if (isloading) {
      return <ActivityIndicator size="large" color="#ff2e63" />;
    } else {
      const cards = data.map((item, idx) => {
        return (
          <GenreCard
            key={idx}
            navigation={navigation}
            _title={item.name}
            _url={item.url}
          />
        );
      });

      if (data.length % 2 === 1) {
        return cards.concat(
          <View key={data.length} style={styles.dummycard} />,
        );
      } else {
        return cards;
      }
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
    zIndex: 10,
  },
});

export default HomeView;
