import React, { Dimensions } from 'react-native';
import { black } from './moreStyles';
var {height, width} = Dimensions.get('window');

const MoreStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center'
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  modalInnerContainer: {
    alignItems: 'center',
    height: height,
    width: width,
  },

  modalCloseButton: {
    marginTop: 59,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 15,
    alignSelf: 'flex-end'
  },

  modalCloseButtonText: {
    fontFamily: 'Avenir',
    color: 'black',
  },

  websiteBlockText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: 'black'
  },

  aboutBlockText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: 'black'
  },

  nextStepsBlockText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: 'black'
  },

  churchLifeBlockText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: 'black'
  },

  facebookBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 113,
    borderColor: black,
    flexDirection: 'row'
  },

  blockInnerIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 40
  },

  instagramBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 113,
    borderColor: black,
    flexDirection: 'row'
  },

  twitterBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 113,
    borderColor: black,
    flexDirection: 'row'
  },

  mailBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 113,
    borderColor: black,
    flexDirection: 'row'
  },

  websiteBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 65,
    borderColor: black,
    flexDirection: 'row'
  },

  blockInnerWebsiteText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 30,
  },

  blockInnerAboutText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 38,
  },

  blockInnerNSText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 18,
  },

  blockInnerCLText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
  },

  aboutBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 65,
    borderColor: black,
    flexDirection: 'row'
  },

  nextStepsBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 65,
    borderColor: black,
    flexDirection: 'row'
  },

  churchLifeBlock: {
    margin: 10,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    width: 128,
    height: 65,
    borderColor: black,
    flexDirection: 'row'
  },

  blocks: {
    paddingTop: 20,
    alignItems: 'stretch'
  },

  row: {
    flexDirection: 'row',
  },

  separatedRow: {
    marginTop: 10,
    flexDirection: 'row',
  }

});

export default MoreStyles;
