import React, {
  Component,
  View,
  WebView,
  Text
} from 'react-native';

import TwitterStyles from '../styles/twitterStyles';

class Twitter extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View>
        <WebView
          style={TwitterStyles.webView}
          source={{
            uri: 'https://twitter.com/CelebrationORL',
          }}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

export default Twitter;
