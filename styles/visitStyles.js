import React, { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

const VisitStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  title: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '800',
    color: '#444444',
    marginTop: 40,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  body: {
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 25,
    color: '#444444',
    borderWidth: 3,
    borderColor: '#444444',
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  map: {
    height: 440,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#eeeeee'
  },

  androidMapGraphicWrapper: {
    alignSelf: 'center'
  },

  androidMapGraphic: {
    marginTop: 15,
    marginBottom: 0,
    width: width-60,
    height: 350,
    borderRadius: 200,
    borderWidth: 4,
    borderColor: 'black'
  },

});

export default VisitStyles;
