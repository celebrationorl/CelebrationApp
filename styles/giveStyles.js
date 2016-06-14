import React, { Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

const GiveStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  scrollView: {
    backgroundColor: 'transparent',
    height: height,
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

});

export default GiveStyles;
