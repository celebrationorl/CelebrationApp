import React from 'react-native';

const TabBarStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  tabs: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgrey'
  },

  icon: {
    position: 'relative',
    padding: 50,
    bottom: 20,
    left: -62
  }

});

export default TabBarStyles;
