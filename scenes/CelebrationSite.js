import React, {
  Component,
  View,
  WebView,
  Text
} from 'react-native';

import CelebrationStyles from '../styles/celebrationStyles';
import Weblay from '../components/Weblay';
import * as Animatable from 'react-native-animatable';

class CelebrationSite extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.refs.outerView.bounceInUp(800);
    this.refs.innerView.bounceInUp(900);
  }

  render() {

    return (
      <Animatable.View
        ref="outerView"
        style={CelebrationStyles.container}>
        <Animatable.View ref="innerView">
          <Weblay
            type="website"
            title="LOADING CELEBRATION WEBSITE"
            uri="http://celebrationorl.org/"
            />
        </Animatable.View>
      </Animatable.View>
    );
  }
}

export default CelebrationSite;
