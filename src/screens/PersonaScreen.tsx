/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }

interface Props
  extends NativeStackScreenProps<RootStackParams, 'personaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const {changeName} = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, [navigation, params]);

  useEffect(() => {
    changeName(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
