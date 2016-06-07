import React, {
  Component,
  View,
  Text
} from 'react-native';

import InstagramStyles from '../styles/instagramStyles';
import Weblay from '../components/Weblay';
import * as Animatable from 'react-native-animatable';

class Instagram extends Component {

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
        style={InstagramStyles.container}>
        <Animatable.View ref="innerView">
          <Weblay
            type="instagram"
            title="LOADING CELEBRATION INSTAGRAM"
            uri="https://www.instagram.com/celebrationorl/"
            />
        </Animatable.View>
      </Animatable.View>
    );
  }
}

export default Instagram;
