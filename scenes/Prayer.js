import React, {
  Component,
  View,
  Text
} from 'react-native';

import PrayerStyles from '../styles/prayerStyles';
import ImageBar from '../components/ImageBar';

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
        <ImageBar title="Prayer" />
        <Text style={PrayerStyles.title}>
          {payload.title}
        </Text>
        <Text style={PrayerStyles.body}>
          {payload.body}
        </Text>
      </View>
    );
  }

}

export default Prayer;
