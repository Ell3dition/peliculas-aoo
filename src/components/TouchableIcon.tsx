import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeIcon(iconName)}>
      <Icon name={iconName} size={80} color={colors.secondary} />
    </TouchableOpacity>
  );
};
