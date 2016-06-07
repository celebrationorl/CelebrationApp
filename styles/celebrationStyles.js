import React, { Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

const CelebrationStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: width
  },

});

export default CelebrationStyles;
