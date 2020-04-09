import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const WIDTH = Dimensions.get('window').width;

const OrderModal = (props) => {
  const {showModal, setVisible} = props;

  return (
    <Modal isVisible={showModal} onBackdropPress={() => setVisible(false)}>
      <View style={styles.modalContainer}>
        <Text style={[styles.modalText, styles.modalHeader]}>Sort by:</Text>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.modalButton}>
          <Text style={styles.modalText}>Highest score</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.modalText}>Lowest score</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.modalText}>Oldest first</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.modalText}>Newest first</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.modalText}>Longest first</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.modalText}>Shortest first</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.modalText}>Title A to Z</Text>
        </TouchableOpacity>
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

export default OrderModal;
