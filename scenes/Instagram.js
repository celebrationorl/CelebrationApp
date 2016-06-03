import React, {
  Component,
  View,
  Text
} from 'react-native';

import InstagramStyles from '../styles/instagramStyles';
import Weblay from '../components/Weblay';

class Instagram extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View>
        <Weblay
          type="instagram"
          title="LOADING CELEBRATION INSTAGRAM"
          uri="https://www.instagram.com/celebrationorl/"
          />
      </View>
    );
  }
}

export default Instagram;
