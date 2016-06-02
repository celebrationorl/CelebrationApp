import React, { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

const PrayerStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  icon: {
    transform: [{rotate: '50deg'}],
  }

});

export default PrayerStyles;
