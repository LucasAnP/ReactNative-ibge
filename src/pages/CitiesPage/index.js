/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import Row from '../../components/row';

function CitiesPage({navigation, route}) {
  const {estado} = route.params;
  const [cities, setCities] = useState([]);
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.id}/municipios`;

  const goBack = () => {
    navigation.goBack();
  };

  const getCities = async () => {
    try {
      const response = await axios.get(url);
      const {data} = response;
      setCities(data);
    } catch (error) {
      alert(error.message);
    }
  };
  // pra codar quando abrir a aplicação
  useEffect(() => {
    getCities();
  }, []);

  return (
    <FlatList
      ListEmptyComponent={() => <ActivityIndicator color="red" />}
      ListHeaderComponent={() => (
        <View style={{height: 50, backgroundColor: 'yellow'}}>
          <TouchableOpacity
            onPress={goBack}
            title="voltar"
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
      )}
      ListFooterComponent={() => (
        <View style={{height: 50, backgroundColor: 'green'}} />
      )}
      data={cities}
      renderItem={({item}) => <Row item={item} />}
    />
  );
}

export default CitiesPage;
