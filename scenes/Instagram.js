import React, {
  Component,
  View,
  WebView,
} from 'react-native';

import ButtonStyles from '../styles/buttons';
import InstagramStyles from '../styles/instagramStyles';

class Instagram extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired,
    onSceneSwitch: React.PropTypes.func.isRequired,
  }

  render() {

    var {payload} = this.props;

    return (
      <View style={InstagramStyles.container}>
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
