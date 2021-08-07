import {Dimensions, StyleSheet, Platform} from 'react-native';
const {height, width} = Dimensions.get('screen');
export const stylesLive = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: height * 0.05,
  },
  textHeader: {
    fontWeight: '600',
  },
  avatar: {
    marginRight: '5%',
  },
  gameContainer: {
    backgroundColor: '#444',
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: width * 0.2,
    opacity: 0.9,
  },
  titleGameContainer: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: '5%',
  },
  listGame: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '5%',
  },
  iconGame: {
    width: width * 0.15,
    height: width * 0.15,
    margin: '5%',
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 8,
  },
  slotContainer: {
    backgroundColor: '#444',
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.9,
    // height: height * 0.3,
  },
  listSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
  },
  iconSlot: {
    width: width * 0.15,
    height: width * 0.15,
    margin: '5%',
    // borderRadius: 8,
  },
  eventContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.8,
    marginTop: width * 0.15,
    marginBottom: 10,
    
  },
  buttonStart: {
    backgroundColor: '#1a75ff',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.4,
    height: width * 0.1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonEvent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    // padding: '5%',
    width: width * 0.15,
    height: width * 0.15,
    borderWidth: 2,
    borderColor: '#1a75ff',
    backgroundColor: '#444',
    
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  buttonNav: {
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNav: {
    color: '#fff',
  },
});
