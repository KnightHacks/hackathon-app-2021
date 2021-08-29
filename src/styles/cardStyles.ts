import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderRadius: 25,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  headerImageContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  headerImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  headerTitle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  tierBadge: {
    height: 25,
    borderRadius: 10,
    right: 15,
    top: 15,
    position: 'absolute',
    padding: 5,
  },
});

export default styles;
