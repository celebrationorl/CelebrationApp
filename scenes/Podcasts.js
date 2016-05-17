import React, {
  Component,
  WebView,
  View
} from 'react-native';

import PodcastsStyles from '../styles/podcastsStyles';

class Podcasts extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={PodcastsStyles.container}>
        <WebView
          style={PodcastsStyles.webView}
          source={{
            uri: "http://celebrationorl.hipcast.com/podcast/HJjyJb",
          }}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

export default Podcasts;
