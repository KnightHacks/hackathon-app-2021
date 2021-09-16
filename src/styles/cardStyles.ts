import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //The following is universally used for all cards
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
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
  socialCardLight: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
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
  textTertiaryLight: {
    color: 'black',
    marginTop: 10,
  },
  textQuaternaryLight: {
    color:  'black',
    fontSize: 22,
    width: '86%',
    paddingLeft: 5,
  },
  headerImageContainerLight: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
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
  socialCardDark: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#5e5d5d',
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
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
    color: 'white',//808080
    fontWeight: '500',
  },
  textSecondaryDark: {
    color: 'white',//AFAFAF
    fontWeight: '700',
  },
  textTertiaryDark: {
    color: 'white',
    marginTop: 10,
  },
  textQuaternaryDark: {
    color:  'white',
    fontSize: 22,
    width: '86%',
    paddingLeft: 5,
  },
  headerImageContainerDark: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#5e5d5d',
    borderRadius: 10,
  },
});

export default styles;
