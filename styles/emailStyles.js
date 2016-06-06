import React, { Dimensions } from 'react-native';
var { width } = Dimensions.get('window');
import { titleColor, paragraphColor } from './colorStyles';

const EmailStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: width,
    paddingLeft: 40,
    paddingRight: 40
  },

  innerContainer: {
    alignSelf: 'flex-start',
    marginTop: -25
  },

  contactTitle: {
    fontFamily: 'Avenir',
    marginTop: 30,
    paddingBottom: 3,
    fontSize: 18,
    fontWeight: '600',
    color: titleColor
  },

  contactParagraph: {
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '200',
    color: paragraphColor,
    paddingBottom: 5
  },

  contactChunck: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },

});

export default EmailStyles;
