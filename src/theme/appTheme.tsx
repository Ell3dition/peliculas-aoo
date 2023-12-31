import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856d6',
  secondary: '#FF9427',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },

  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  botonGrandeTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },

  menuBotton: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuText: {
    fontSize: 20,
  },
});
