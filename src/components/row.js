/* eslint-disable no-use-before-define */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Row = ({item, onPress}) => (
  // Referenciando o onPress da HomePage
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text>{`${item.nome}`}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth, // Menor numero possível
    borderBottomColor: 'white',
    height: 60,
    paddingLeft: 16,
    justifyContent: 'center',
  },
});

export default Row;
