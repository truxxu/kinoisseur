import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import menu from '../assets/menu.png';
import arrow from '../assets/back.png';

const WIDTH = Dimensions.get('window').width;

const Navbar = ({navigation, _title, _back}) => {
  let title = _title || '',
    back = _back || false;

  const HandleClick = () => {
    if (back) {
      navigation.goBack();
    } else {
      navigation.toggleDrawer();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => HandleClick()} style={styles.button}>
        {!back ? (
          <Image style={styles.logo} source={menu} />
        ) : (
          <Image style={styles.logo} source={arrow} />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: WIDTH,
    alignItems: 'center',
    backgroundColor: '#08d9d6',
    paddingLeft: 15,
  },
  text: {
    marginLeft: 20,
    color: '#eaeaea',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: 20,
    height: 20,
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navbar;
