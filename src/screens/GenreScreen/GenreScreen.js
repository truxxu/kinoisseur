import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

import {api} from '../../../env';
import GenreView from './GenreView';

const GenreScreen = ({navigation, route}) => {
  const {_title, id} = route.params;
  let title = _title || '';

  const [data, setData] = useState([]),
    [isloading, setLoad] = useState(true),
    [bottom, setBottom] = useState(false);

  const fetchData = (pageNum) => {
    axios
      .get(`${api.liveServer}/genres/${id}/movies?page=${pageNum}`)
      .then((response) => {
        response.data.length === 0
          ? setBottom(true)
          : setData(data.concat(response.data));
        setLoad(false);
      })
      .catch((error) => {
        Alert.alert('Error', 'Please try again');
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GenreView
      navigation={navigation}
      _title={title}
      isloading={isloading}
      _movies={data}
      fetchData={fetchData}
      bottom={bottom}
    />
  );
};

export default GenreScreen;
