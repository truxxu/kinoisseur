import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const OrderModal = (props) => {
  const {showModal} = props,
    [isVisible, setVisible] = useState(true);
  let show = showModal && isVisible;

  return (
    <Modal isVisible={show}>
      <View style={{backgroundColor: 'white'}}>
        <Text>Sort by:</Text>
        <TouchableOpacity>
          <Text>Highest score</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Lowest score</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Oldest first</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Newest first</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Longest first</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Shortest first</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Title A to Z</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OrderModal;
