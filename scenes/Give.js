import React, {
  Component,
  View,
} from 'react-native';

import GiveStyles from '../styles/giveStyles';
import ImageBar from '../components/ImageBar';
import Weblay from '../components/Weblay';

var injectedJSCode = `
    var heroImg = document.getElementsByClassName("vc_row wpb_row vc_row-fluid background-static");
    var nav = document.getElementsByClassName("wpb_text_column wpb_content_element  fixed-menu");

    var footer = document.getElementById("footer-callout-wrap");

    footer.style.display = "none";
    heroImg[0].style.display = "none";
    nav[0].style.display = "none";

    document.querySelector(".wpb_text_column.wpb_content_element.newtitle").style.display = 'none';
    document.querySelector(".center-row-inner.clr").style.marginTop = '-50px';

`;

class Give extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={GiveStyles.container}>
        <ImageBar
          title="Give"
          imagePath={require('../assets/img/top_image_bar/top_image_bar_give.png')}
          />
        <Weblay
          type="give"
          title="LOADING CELEBRATION GIVING"
          uri="http://celebrationorl.org/giving-information/"
          injectedJSCode={injectedJSCode}
          hasBackNav
          backNavText="BACK"
          />
      </View>
    )
  }
}

export default Give;
