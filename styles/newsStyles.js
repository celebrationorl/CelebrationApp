import React, { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

const PrayerStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  iconWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }

});

export default PrayerStyles;
