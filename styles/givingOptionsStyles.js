import React, { Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window');
import { black } from './colorStyles';

const GivingOptionsStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width,
  },

  scrollView: {
    backgroundColor: 'transparent',
    height: 540
  },

  webView: {
    marginTop: -10,
    height: height
  },

  areaTitleText: {
    fontFamily: 'Avenir',
    fontSize: 14,
    color: 'lightgrey',
    textAlign: 'center',
    fontWeight: '800',
  },

  areaText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: 'lightgrey',
    textAlign: 'center',
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10
  },

  optionDetailSection: {
    backgroundColor: 'white',
  },

  areasWrapper: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },

  area: {
    paddingTop: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  weblay: {
    marginLeft: -20,
    width: width,
    height: 380,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey'
  },

  weblaySectionWrapper: {
    paddingTop: 20,
  },

  body: {
    backgroundColor: 'white',
    width: width,
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 30,
  },

  primaryTextWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey'
  },

  primaryText: {
    textAlign: 'center',
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
    alignSelf: 'flex-start',
    opacity: 0.85,
  },

  subSecondaryText: {
    paddingTop: 12,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '400',
    color: black,
    alignSelf: 'flex-start',
    opacity: 0.85,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },

});

export default GivingOptionsStyles;
