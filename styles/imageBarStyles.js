import React from 'react-native';

const ImageBarStyles = React.StyleSheet.create({

  title: {
    fontFamily: 'Avenir',
    marginTop: 52,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white'
  },

  bgImage: {
    resizeMode: 'cover',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },

});

export default ImageBarStyles;
