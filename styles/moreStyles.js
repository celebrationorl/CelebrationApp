import React, { Dimensions } from 'react-native';
import {moreblockBorderColor} from './moreStyles';
var {height, width} = Dimensions.get('window');

var deductedWidth = width - 10;

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
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: moreblockBorderColor,
    marginLeft: -7,
    paddingRight: 7
  },

  aboutBlockText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: moreblockBorderColor
  },

  facebookBlock : {
    borderTopWidth: 5,
    borderRightWidth: 2,
    borderBottomWidth: 3,
    borderLeftWidth: 5,
    paddingTop: 20,
    paddingRight: 43,
    paddingBottom: 20,
    paddingLeft: 40,
    borderColor: moreblockBorderColor,
    flexDirection: 'row'
  },

  instagramBlock : {
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    paddingTop: 20,
    paddingRight: 43,
    paddingBottom: 20,
    paddingLeft: 40,
    borderColor: moreblockBorderColor,
    flexDirection: 'row'
  },

  twitterBlock : {
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    paddingTop: 20,
    paddingRight: 40,
    paddingBottom: 20,
    paddingLeft: 40,
    borderColor: moreblockBorderColor,
    flexDirection: 'row'
  },

  mailBlock : {
    borderTopWidth: 2,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 3,
    paddingTop: 20,
    paddingRight: 40,
    paddingBottom: 20,
    paddingLeft: 40,
    borderColor: moreblockBorderColor,
    flexDirection: 'row'
  },

  websiteBlock : {
    borderTopWidth: 5,
    borderRightWidth: 3,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    paddingTop: 20,
    paddingRight: 25,
    paddingBottom: 20,
    paddingLeft: 40,
    borderColor: moreblockBorderColor,
    flexDirection: 'row'
  },

  aboutBlock : {
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 2,
    paddingTop: 20,
    paddingRight: 40,
    paddingBottom: 20,
    paddingLeft: 40,
    borderColor: moreblockBorderColor,
    flexDirection: 'row'
  },

  blocks: {
    padding: 70,
    alignItems: 'stretch'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  separatedRow: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});

export default MoreStyles;
