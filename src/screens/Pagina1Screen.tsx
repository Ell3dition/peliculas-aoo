/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('PaginaDos')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navegar con argumentos
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('personaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="man-outline" size={40} color="white" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('personaScreen', {
              id: 1,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={40} color="white" />
          <Text style={styles.botonGrandeTexto}>maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
