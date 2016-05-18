import React, {
  Component,
  View,
  WebView
} from 'react-native';

import GiveStyles from '../styles/giveStyles';
import ImageBar from '../components/ImageBar';

class Give extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    let hideGivingHeroImgJSCode = `
        var heroImg = document.getElementsByClassName("vc_row wpb_row vc_row-fluid background-static");
        var nav = document.getElementsByClassName("wpb_text_column wpb_content_element  fixed-menu");

        var footer = document.getElementById("footer-callout-wrap");

        footer.style.display = "none";
        heroImg[0].style.display = "none";
        nav[0].style.display = "none";

        document.querySelector(".wpb_text_column.wpb_content_element.newtitle").style.display = 'none';
        document.querySelector(".center-row-inner.clr").style.marginTop = '-50px';

    `;

    return (
      <View style={GiveStyles.container}>
        <ImageBar title="Give" />
        <WebView
          style={GiveStyles.webView}
          source={{
            uri: 'http://celebrationorl.org/giving-information/',
          }}
          injectedJavaScript={hideGivingHeroImgJSCode}
          javaScriptEnabledAndroid={true}
          scalesPageToFit={true}
        />
      </View>
    )
  }
}

export default Give;
