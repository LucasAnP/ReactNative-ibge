/* eslint-disable no-use-before-define */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import CitiesPage from './src/pages/CitiesPage';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Estados"
        options={{title: 'Estados do Brasil'}}
        component={HomePage}
      />
      <Stack.Screen
        name="Cities"
        options={({route}) => ({title: route.params.estado.nome})}
        component={CitiesPage}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
