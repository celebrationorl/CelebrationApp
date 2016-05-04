import React, {Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

const InstagramStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  webView: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: 'white',
    height: height
  },

});

export default InstagramStyles;
