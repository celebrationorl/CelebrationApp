import React, { Dimensions } from 'react-native';
var { width } = Dimensions.get('window');
import { titleColor } from './moreStyles';

const AboutStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },

  title: {
    fontFamily: 'Avenir',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    color: titleColor
  },

  body: {
    fontFamily: 'Avenir',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '400',
    color: titleColor,
    alignSelf: 'center',
    opacity: 0.85
  }

});

export default AboutStyles;
