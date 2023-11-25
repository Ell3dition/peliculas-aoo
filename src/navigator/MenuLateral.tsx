/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTGREwYgEWrBDaZV5I9_AVLAqRPMqmgzMhQ&usqp=CAU',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.menuBotton}>
          <Text style={styles.menuText}>Navegacion</Text>
          <Text>
            <Icon name="airplane-outline" size={30} color="grey" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingScreen')}
          style={styles.menuBotton}>
          <Text style={styles.menuText}>Settings</Text>
          <Text>
            <Icon name="cog-outline" size={30} color="grey" />
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
