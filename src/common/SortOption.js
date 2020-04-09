import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const SortOption = (props) => {
  const {setVisible, text} = props;

  return (
    <TouchableOpacity
      onPress={() => setVisible(false)}
      style={styles.modalButton}>
      <Text style={styles.modalText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modalText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff2e63',
    textAlign: 'center',
  },
  modalButton: {
    marginVertical: 10,
    borderColor: '#ff2e63',
    width: WIDTH * 0.9,
  },
});

export default SortOption;
