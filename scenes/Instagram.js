import React, {
  Component,
  View,
  WebView,
  Text
} from 'react-native';

import InstagramStyles from '../styles/instagramStyles';

class Instagram extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View>
        <WebView
          style={InstagramStyles.webView}
          source={{
            uri: 'https://www.instagram.com/celebrationorl/',
          }}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

export default Instagram;
