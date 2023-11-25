import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';
export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  useEffect(() => console.log('Tab 1 Screen'), []);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: top,
      }}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="bandage-outline" />
        <TouchableIcon iconName="calculator-outline" />
      </Text>
    </View>
  );
};
