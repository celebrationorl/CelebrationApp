import React, {
  Component,
  View,
  Text,
  Image
} from 'react-native';

import NewsStyles from '../styles/newsStyles';
import WebviewOverlayStyles from '../styles/webviewOverlayStyles';
import ImageBar from '../components/ImageBar';
import Weblay from '../components/Weblay';

var injectedJSCode = `

  document.querySelector(".page-header").style.display = 'none';
  document.querySelector("#content-wrap").style.marginTop = '70px';
  document.querySelector("#footer-callout-wrap").style.display = 'none';


  var newsPosts = document.querySelectorAll(".blog-entry-inner.clr");
  var buttons = document.querySelectorAll(".theme-button");
  var titles = document.querySelectorAll(".blog-entry-title > a");

  for (var i = 0; i < newsPosts.length; i++) {
    newsPosts[i].style.border = 'solid 3px black';
  }

  for (var i = 0; i < titles.length; i++) {
    titles[i].style.color = '#444444';
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.fontSize = '12px';
    buttons[i].style.fontWeight = '600';
    buttons[i].style.fontFamily = 'Avenir';
    buttons[i].style.backgroundColor = 'white';
    buttons[i].style.color = 'black';
    buttons[i].style.border = 'solid 0px black';
    buttons[i].style.height = '25px';
    buttons[i].style.marginLeft = '-8px';
  }

`;

class News extends Component {

  constructor(props, context) {
    super(props, context);
  }

  getDetailedPresentation() {
    return (
      <View style={NewsStyles.presentation}>
        <Image
          style={NewsStyles.logo}
          source={require('../assets/img/celebration_logo.png')}
        />
        <Text style={NewsStyles.presentationText}>
          WELCOME TO CELEBRATION CHURCH
        </Text>
      </View>
    )
  }

  render() {

    return (
      <View style={NewsStyles.container}>
        <ImageBar
          title="News"
          imagePath={require('../assets/img/top_image_bar/top_image_bar_news.png')}
          />
        <Weblay
          hasBackNav
          backNavText="BACK"
          type="news"
          detailedPresentation={this.getDetailedPresentation()}
          title="LOADING CELEBRATION NEWS"
          uri="http://celebrationorl.org/category/updates/"
          injectedJSCode={injectedJSCode}
          />
      </View>
    );
  }

}

export default News;
