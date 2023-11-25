import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}
export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3</Text>

      <Button title="regresar" onPress={() => navigation.pop()} />

      <Button title="ir al home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
