import React from 'react-native';

const VisitStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },

  title: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '800',
    color: '#444444',
    marginTop: 40,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  body: {
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 25,
    color: '#444444',
    borderWidth: 3,
    borderColor: '#444444',
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  map: {
    height: 440,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#eeeeee'
  }

});

export default VisitStyles;
