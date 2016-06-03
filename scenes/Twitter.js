import React, {
  Component,
  View,
  Text
} from 'react-native';

import TwitterStyles from '../styles/twitterStyles';
import Weblay from '../components/Weblay';

class Twitter extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View>
        <Weblay
          type="twitter"
          title="LOADING CELEBRATION TWITTER"
          uri="https://twitter.com/CelebrationORL"
          />
      </View>
    );
  }
}

export default Twitter;
