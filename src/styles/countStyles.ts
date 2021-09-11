import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46C2FF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#46C2FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.83,
    shadowRadius: 17,
  },
  contents: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    backgroundColor: '#46C2FF',
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default Styles;
