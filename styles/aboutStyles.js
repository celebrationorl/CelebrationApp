import React from 'react-native';

const AboutStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'lightgrey'
  },

  body: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '400',
    color: 'lightgrey',
    alignSelf: 'center',
    opacity: 0.85
  }

});

export default AboutStyles;
