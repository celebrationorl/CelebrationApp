import React, {
  Component,
  View,
  Text
} from 'react-native';

import FacebookStyles from '../styles/facebookStyles';
import Weblay from '../components/Weblay';
import * as Animatable from 'react-native-animatable';

class Facebook extends Component {

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
        style={FacebookStyles.container}>
        <Animatable.View ref="innerView">
          <Weblay
            type="facebook"
            title="LOADING CELEBRATION FACEBOOK"
            uri="https://www.facebook.com/CelebrationOrl/"
            />
        </Animatable.View>
      </Animatable.View>
    );
  }
}

export default Facebook;
