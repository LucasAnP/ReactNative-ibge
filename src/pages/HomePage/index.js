/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {View, FlatList} from 'react-native';
import Row from '../../components/row';

const HomePage = ({navigation}) => {
  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  const [data, setData] = useState([]);

  const goCities = (item) => {
    navigation.navigate('Cities', {estado: item});
  };

  useEffect(() => {
    // irá acontecer
    getStates();
  }, []);

  const getStates = async () => {
    try {
      const response = await axios.get(url);
      const {data} = response;
      setData(data);
    } catch (error) {
      alert(error.response.statusText);
    }
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Row item={item} onPress={() => goCities(item)} />
        )}
      />
    </View>
  );
};

export default HomePage;
