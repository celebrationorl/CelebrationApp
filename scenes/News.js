import React, {
  Component,
  View,
  Text,
  WebView
} from 'react-native';

import NewsStyles from '../styles/newsStyles';
import ImageBar from '../components/ImageBar';

var injectedJSCode = `

  document.querySelector(".page-header").style.display = 'none';
  document.querySelector("#content-wrap").style.marginTop = '70px';
  document.querySelector("#footer-callout-wrap").style.display = 'none';

  var newsBlocks = document.querySelector("div");

  var button = document.createElement('BUTTON');
  button.onclick = function() {
    window.history.back();
  };

  var buttonText = document.createTextNode("❮ ALL NEWS");
  button.appendChild(buttonText);

  button.style.height = '50px';
  button.style.width = '100%';
  button.style.position = 'fixed';
  button.style.opacity = '0.98';
  button.style.zIndex = '1000';

  document.body.insertBefore(button, newsBlocks);

`;

class News extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={NewsStyles.container}>
        <ImageBar title="News" />
        <WebView
          style={NewsStyles.webView}
          source={{
            uri: "http://celebrationorl.org/category/updates/",
          }}
          injectedJavaScript={injectedJSCode}
          javaScriptEnabledAndroid={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }

}

export default News;
