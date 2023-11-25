import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  PaginaUno: undefined;
  PaginaDos: undefined;
  PaginaTres: undefined;
  personaScreen: {
    id: number;
    nombre: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="PaginaUno"
        options={{
          title: 'Pagina 1',
        }}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="PaginaDos"
        options={{
          title: 'Pagina 2',
        }}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="PaginaTres"
        options={{
          title: 'Pagina 3',
        }}
        component={Pagina3Screen}
      />
      <Stack.Screen name="personaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
