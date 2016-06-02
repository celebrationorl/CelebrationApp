import React, {
  Component,
  View,
  Text,
  WebView
} from 'react-native';

import NewsStyles from '../styles/newsStyles';
import ImageBar from '../components/ImageBar';

import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/EvilIcons';

const SpinnerIcon = (<Icon name="spinner-3" size={50} color="#171717" />)

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
        <View style={NewsStyles.icon}>
          <Animatable.View
            animation="rotate"
            easing="linear"
            iterationCount="infinite"
            style={NewsStyles.iconWrapper}
            >
            {SpinnerIcon}
          </Animatable.View>
        </View>
        <WebView
          style={NewsStyles.webView}
          source={{
            uri: "http://celebrationorl.org/category/updates/",
          }}
          onLoad={() => console.log('loaded')}
          injectedJavaScript={injectedJSCode}
          javaScriptEnabledAndroid={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }

}

export default News;
