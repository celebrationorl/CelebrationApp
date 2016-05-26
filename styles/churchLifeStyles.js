import React, { Dimensions } from 'react-native';
var { width } = Dimensions.get('window');
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

  areaText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: black,
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
