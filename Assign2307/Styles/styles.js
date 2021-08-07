import {Dimensions, StyleSheet, Platform} from 'react-native';
const {height, width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  container: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.05,
  },
  logo: {
    fontSize: 24,
    color: '#4d79ff',
    fontWeight: '700',
  },
  formSearch: {
    width: width * 0.7,
    borderRadius: 5,
    // padding: height * 0.01,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    padding: height * 0.01,
  },
  profile: {
    // paddingHorizontal: 10,
  },
  backgroundImage: {
    height: height * 0.3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.4,
    elevation: 5,
  },
  buttonEdit: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  imageAvatar: {
    width: width / 4,
    height: height / 8.5,
  },
  textUserName: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonLogin: {
    backgroundColor: '#3776e8',
    borderRadius: 10,
    textAlign: 'center',
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 10,
  },
  buttonRegister: {
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontWeight: '500',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  indicatorsItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageBalance: {
    height: height * 0.1,
  },
  balance: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flex: 1,
  },
  balanceTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceText: {
    color: '#fff',
    fontWeight: '500',
  },
  formInputBalance: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#3b6caf',
    width: width * 0.2,
    color: '#fff',
    textAlign: 'center',
    padding: 5,
  },
  imageMethod: {
    width: 75,
    height: 75,
    marginVertical: 20,
  },
  imageNav: {
    width: 35,
    height: 35,
  },
  navInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  navInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  navInfoText: {
    fontWeight: '600',
    marginHorizontal: 10,
  },
});
