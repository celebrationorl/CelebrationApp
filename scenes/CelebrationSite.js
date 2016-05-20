import React, {
  Component,
  View,
  WebView,
  Text
} from 'react-native';

import CelebrationStyles from '../styles/celebrationStyles';

class CelebrationSite extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View>
        <WebView
          style={CelebrationStyles.webView}
          source={{
            uri: 'http://celebrationorl.org/',
          }}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

export default CelebrationSite;
