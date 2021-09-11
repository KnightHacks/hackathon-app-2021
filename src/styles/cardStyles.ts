import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //The following is universally used for all cards
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

  //The following is light theme specific
  cardLight: {
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
    overflow: 'hidden',
  },
  headingLight: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: 'black',
  },
  textPrimaryLight: {
    color: 'black',
    fontWeight: '500',
  },
  textSecondaryLight: {
    color: 'black',
    fontWeight: '700',
  },

  //The following is dark theme specific
  cardDark: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#343434',
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
  },
  headingDark: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: 'white',
  },
  textPrimaryDark: {
    color: '#808080',
    fontWeight: '500',
  },
  textSecondaryDark: {
    color: '#AFAFAF',
    fontWeight: '700',
  },
});

export default styles;
