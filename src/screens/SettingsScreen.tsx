import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState, signIn, logOut} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top + 20,
      }}>
      <Text style={styles.title}>SettingScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {!authState.isLoggedIn && (
        <TouchableOpacity onPress={signIn}>
          <Text>Ingresar</Text>
        </TouchableOpacity>
      )}
      {authState.isLoggedIn && (
        <TouchableOpacity onPress={logOut}>
          <Text>Salir</Text>
        </TouchableOpacity>
      )}

      <Text>Favorite Icon</Text>
      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colors.secondary}
        />
      )}
    </View>
  );
};
