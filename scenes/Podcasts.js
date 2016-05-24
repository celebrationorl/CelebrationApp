import React, {
  Component,
  WebView,
  View
} from 'react-native';

var injectedJSCode = `

  // document.getElementById("top").style.marginTop = "50px";

  document.querySelector(".splash").style.display = 'none';

  document.querySelector("nav").style.display = "none";

`;

import PodcastsStyles from '../styles/podcastsStyles';
import ImageBar from '../components/ImageBar';

class Podcasts extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={PodcastsStyles.container}>
        <ImageBar title="Podcasts" />
        <WebView
          style={PodcastsStyles.webView}
          source={{
            uri: "http://celebrationorl.hipcast.com/podcast/HJjyJb",
          }}
          injectedJavaScript={injectedJSCode}
          javaScriptEnabledAndroid={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

export default Podcasts;
