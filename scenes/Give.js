import React, {
  Component,
  View,
  Text
} from 'react-native';

import GiveStyles from '../styles/giveStyles';
import ImageBar from '../components/ImageBar';

class Give extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired,
  }

  render() {

    var {payload} = this.props;

    return (
      <View style={GiveStyles.container}>
        <ImageBar title="Give" />
        <Text style={GiveStyles.title}>
          {payload.title}
        </Text>
        <Text style={GiveStyles.body}>
          {payload.body}
        </Text>
      </View>
    )
  }
}

export default Give;
