import React, { Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window');
import { black } from './colorStyles';

const AboutStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width
  },

  scrollView: {
    backgroundColor: 'transparent',
    height: 300,
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

  body: {
    fontFamily: 'Avenir',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 30,
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

  secondaryText: {
    paddingTop: 12,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '400',
    color: black,
    alignSelf: 'flex-start',
    opacity: 0.85
  },

  graphicWrapper: {
    alignSelf: 'center'
  },

  graphic: {
    marginTop: 15,
    marginBottom: 0,
    height: 131,
    width: 191
  },


});

export default AboutStyles;








/*
areaImage: {
  height: 140,
  width: 140,
  borderRadius: 69,
  justifyContent: 'center',
  borderWidth: 0,
  borderColor: 'rgba(0, 0, 0, 0.3)'
},

areaImageTextWrapper: {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
},

areaImageText: {
  fontFamily: 'Avenir',
  fontSize: 20,
  color: 'white',
  textAlign: 'center',
  fontWeight: '800',
  paddingTop: 85,
  paddingBottom: 85
},

areasWrapper: {
  paddingRight: 15,
  paddingLeft: 15,
  alignItems: 'stretch'
},

area: {
  padding: 35
},

row: {
  flexDirection: 'row',
  justifyContent: 'space-around'
},
*/
