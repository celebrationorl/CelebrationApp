import React, {
  Component,
  View,
  WebView,
  Text
} from 'react-native';

import CelebrationStyles from '../styles/celebrationStyles';
import Weblay from '../components/Weblay';

class CelebrationSite extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={CelebrationStyles.container}>
        <Weblay
          type="website"
          title="LOADING CELEBRATION WEBSITE"
          uri="http://celebrationorl.org/"
          />
      </View>
    );
  }
}

export default CelebrationSite;
