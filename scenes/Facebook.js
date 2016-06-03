import React, {
  Component,
  View,
  Text
} from 'react-native';

import FacebookStyles from '../styles/facebookStyles';
import Weblay from '../components/Weblay';

class Facebook extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View>
        <Weblay
          type="facebook"
          title="LOADING CELEBRATION FACEBOOK"
          uri="https://www.facebook.com/CelebrationOrl/"
          />
      </View>
    );
  }
}

export default Facebook;
