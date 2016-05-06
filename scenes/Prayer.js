import React, {
  Component,
  View,
  Text
} from 'react-native';

import PrayerStyles from '../styles/prayerStyles';
import TabBar from '../components/TabBar';

class Prayer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired,
  }

  render() {

    var {payload} = this.props;

    return (
      <View style={PrayerStyles.container}>
        <Text style={PrayerStyles.title}>
          {payload.title}
        </Text>
        <Text style={PrayerStyles.body}>
          {payload.body}
        </Text>
        <TabBar navigator={this.props.navigator} page="prayer" />
      </View>
    );
  }

}

export default Prayer;
