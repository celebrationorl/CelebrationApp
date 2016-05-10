import React, { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

const PodcastsStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },

  webView: {
    marginTop: -50,
    marginBottom: 50,
    backgroundColor: 'white',
    height: height
  }

});

export default PodcastsStyles;
