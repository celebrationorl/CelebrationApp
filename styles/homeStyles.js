import React from 'react-native';

const HomeStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'lightgrey'
  },

  body: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: 'transparent',
    color: 'white',
    alignSelf: 'center',
    opacity: 0.85,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white'
  },

  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 40,
    marginRight: 50,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default HomeStyles;
