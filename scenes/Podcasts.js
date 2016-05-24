import React, {
  Component,
  WebView,
  View
} from 'react-native';

var injectedJSCode = `

  document.querySelector(".splash").style.display = 'none';

  document.querySelector(".row").style.marginTop = "-51px";

  document.querySelector("nav.navbar.navbar-inverse.navbar-fixed-top").style.display = "none";
  document.querySelector("nav.navbar.navbar-inverse.navbar-fixed-top").style.opacity = "0";

  document.querySelector(".info + .info").style.display = "none";

  document.querySelector(".comments").style.display = "none";

  document.querySelector("#footer").style.display = "none";

  document.querySelector("div.aplayer").style.backgroundColor = "white";

  document.body.style.backgroundColor = "white";

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
