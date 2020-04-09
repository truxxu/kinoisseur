import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import SortOption from './SortOption';

const OrderModal = (props) => {
  const {showModal, setVisible} = props;

  return (
    <Modal isVisible={showModal} onBackdropPress={() => setVisible(false)}>
      <View style={styles.modalContainer}>
        <Text style={[styles.modalText, styles.modalHeader]}>Sort by:</Text>
        <SortOption setVisible={setVisible} text="Highest score" />
        <SortOption setVisible={setVisible} text="Lowest score" />
        <SortOption setVisible={setVisible} text="Oldest first" />
        <SortOption setVisible={setVisible} text="Newest first" />
        <SortOption setVisible={setVisible} text="Longest first" />
        <SortOption setVisible={setVisible} text="Shortest first" />
        <SortOption setVisible={setVisible} text="Title A to Z" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  modalHeader: {
    marginVertical: 20,
  },
});

export default OrderModal;
