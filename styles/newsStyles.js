import React, { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

const NewsStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  presentation: {
    paddingTop: 100,
    alignSelf: 'center'
  },

  presentationText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center'
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center'
  }

});

export default NewsStyles;
