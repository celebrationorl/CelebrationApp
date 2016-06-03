import React, {
  Component,
  View,
  Text,
} from 'react-native';

import NewsStyles from '../styles/newsStyles';
import WebviewOverlayStyles from '../styles/webviewOverlayStyles';
import ImageBar from '../components/ImageBar';
import Weblay from '../components/Weblay';

var injectedJSCode = `

  document.querySelector(".page-header").style.display = 'none';
  document.querySelector("#content-wrap").style.marginTop = '70px';
  document.querySelector("#footer-callout-wrap").style.display = 'none';

  // var newsBlocks = document.querySelector("div");
  //
  // var button = document.createElement('BUTTON');
  // button.onclick = function() {
  //   window.history.back();
  // };
  //
  // var buttonText = document.createTextNode("❮ ALL NEWS");
  // button.appendChild(buttonText);
  //
  // button.style.height = '50px';
  // button.style.width = '100%';
  // button.style.position = 'fixed';
  // button.style.opacity = '0.98';
  // button.style.zIndex = '1000';
  // button.style.fontWeight = '600';
  // button.style.fontSize = '24';

  // document.body.insertBefore(button, newsBlocks);

`;

class News extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    console.log(this.refs.webview);

    return (
      <View style={NewsStyles.container}>
        <ImageBar title="News" />
        <Weblay
          hasBackNav
          backNavText="BACK"
          type="news"
          title="LOADING CELEBRATION NEWS"
          uri="http://celebrationorl.org/category/updates/"
          injectedJSCode={injectedJSCode}
          />
      </View>
    );
  }

}

export default News;
