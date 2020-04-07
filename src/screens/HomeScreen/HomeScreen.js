import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

import {api} from '../../../env';
import HomeView from './HomeView';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]),
    [isloading, setLoad] = useState(false);

  const fetchData = () => {
    axios
      .get(api.liveServer + '/genres/')
      .then((response) => {
        setData(response.data);
        setLoad(false);
      })
      .catch((error) => {
        Alert.alert('Error', 'Please try again');
      });
  };

  useEffect(() => {
    setLoad(true);
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <HomeView navigation={navigation} isloading={isloading} data={data} />;
};

export default HomeScreen;
