import React, {
  Component,
  WebView,
  View
} from 'react-native';

import PodcastsStyles from '../styles/podcastsStyles';
import TabBar from '../components/TabBar';

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
        <TabBar navigator={this.props.navigator} page="podcasts" />
      </View>
    );
  }
}

export default Podcasts;
