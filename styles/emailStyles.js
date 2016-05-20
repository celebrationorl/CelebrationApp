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
    marginTop: -25
  },

  contactTitle: {
    fontFamily: 'Avenir',
    paddingTop: 30,
    paddingBottom: 3,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'flex-start',
    color: titleColor
  },

  contactParagraph: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '200',
    alignSelf: 'flex-start',
    color: paragraphColor,
    paddingBottom: 5
  },

  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around'
  },

  contactChunck: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },

});

export default EmailStyles;
