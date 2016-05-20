import React, { Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

const CelebrationStyles = React.StyleSheet.create({

  webView: {
    width: width,
    height: height - 135
  }

});

export default CelebrationStyles;
