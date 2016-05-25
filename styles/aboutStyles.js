import React, { Dimensions } from 'react-native';
var { width } = Dimensions.get('window');
import { black } from './colorStyles';

const AboutStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: width
  },

  title: {
    marginBottom: 15,
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    color: black
  },

  body: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },

  scrollView: {
    backgroundColor: 'transparent',
    height: 300,
  },

  primaryTextWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey'
  },

  primaryText: {
    paddingBottom: 10,
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '800',
    color: black,
    alignSelf: 'center',
  },

  subPrimaryText: {
    paddingTop: 20,
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '600',
    color: black,
    alignSelf: 'flex-start',
    opacity: 0.94
  },

  secondaryText: {
    paddingTop: 12,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '400',
    color: black,
    alignSelf: 'center',
    opacity: 0.85
  },

  logoWrapper: {
    alignSelf: 'center'
  },

  logo: {
    marginTop: 15,
    marginBottom: 0,
    height: 128,
    width: 128
  }

});

export default AboutStyles;
