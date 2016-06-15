import React, { Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

const GiveStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    backgroundColor: 'transparent',
    height: height,
    width: width
  },

  optionsWrapper: {
    alignItems: 'center',
  },

  optionButton: {
    padding: 35,
    margin: 20,
    borderWidth: 3,
    borderColor: '#171717',
    width: 300,
  },

  optionButtonText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '800',
    color: 'black'
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
    color: '#171717',
  },

});

export default GiveStyles;
