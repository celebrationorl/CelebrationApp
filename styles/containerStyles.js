import React from 'react-native';

const ContainerStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 100
  },

  title: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '600',
    justifyContent: 'center'
  },

  description: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '200',
    color: 'grey',
    justifyContent: 'center'
  }

});

export default ContainerStyles;
