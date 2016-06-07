import React, {
  Component,
  View,
  Text
} from 'react-native';

import TwitterStyles from '../styles/twitterStyles';
import Weblay from '../components/Weblay';
import * as Animatable from 'react-native-animatable';

class Twitter extends Component {

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
        style={TwitterStyles.container}>
        <Animatable.View ref="innerView">
          <Weblay
            type="twitter"
            title="LOADING CELEBRATION TWITTER"
            uri="https://twitter.com/CelebrationORL"
            />
        </Animatable.View>
      </Animatable.View>
    );
  }
}

export default Twitter;
