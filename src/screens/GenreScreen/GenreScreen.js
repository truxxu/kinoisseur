import React from 'react';

import GenreView from './GenreView';

const GenreScreen = ({navigation, route}) => {
  const {_title} = route.params;
  let title = _title || '';

  return <GenreView navigation={navigation} _title={title} />;
};

export default GenreScreen;
