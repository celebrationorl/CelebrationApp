import React from 'react-native';

const ButtonStyles = React.StyleSheet.create({

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA'
  },

  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonInstagramText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black'
  },

  buttonInstagram: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 40,
    marginRight: 50,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default ButtonStyles;
