import React, {
  Component,
  View,
  WebView,
  Text
} from 'react-native';

import FacebookStyles from '../styles/facebookStyles';

class Facebook extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View>
        <WebView
          style={FacebookStyles.webView}
          source={{
            uri: 'https://www.facebook.com/CelebrationOrl/',
          }}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

export default Facebook;
