import React, {
  Component,
  WebView,
  View
} from 'react-native';

import PodcastsStyles from '../styles/podcastsStyles';
import ImageBar from '../components/ImageBar';
import Weblay from '../components/Weblay';

var injectedJSCode = `

  document.querySelector(".splash").style.display = 'none';

  document.querySelector(".row").style.marginTop = "-51px";

  document.querySelector("nav.navbar.navbar-inverse.navbar-fixed-top").style.display = "none";
  document.querySelector("nav.navbar.navbar-inverse.navbar-fixed-top").style.opacity = "0";

  document.querySelector(".info + .info").style.display = "none";

  document.querySelector(".comments").style.display = "none";

  document.querySelector("#footer").style.display = "none";

  document.querySelector("div.aplayer").style.backgroundColor = "white";
  document.querySelector("div.player").style.boxShadow = "none";

  document.querySelector("div.container").style.backgroundColor = "white";
  document.querySelector("div.container").style.width = "100%";
  document.querySelector("div.container").style.maxWidth = "100%";
  document.querySelector("div.container").style.overflowX = "hidden";

  document.querySelector(".row").style.backgroundColor = "white";

  document.querySelector(".info > h1 + p + p").style.marginBottom = "-40px";

  document.body.style.backgroundColor = "white";

  var posts = document.getElementsByClassName("post");
  var postsChildren = document.querySelectorAll(".post > a");

  for (var i = 0; i < posts.length; i++) {
    posts[i].style.border = "solid 3px black";
    posts[i].style.margin = "15px";
  }

  for (var i = 0; i < postsChildren.length; i++) {
    postsChildren[i].style.padding = "15px";
  }

`;

class Podcasts extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={PodcastsStyles.container}>
        <ImageBar
          title="Podcasts"
          imagePath={require('../assets/img/top_image_bar/top_image_bar_podcasts.png')}
          />
        <Weblay
          type="podcasts"
          title="LOADING CELEBRATION PODCASTS"
          uri="http://celebrationorl.hipcast.com/podcast/HJjyJb"
          injectedJSCode={injectedJSCode}
          />
      </View>
    );
  }
}

export default Podcasts;
