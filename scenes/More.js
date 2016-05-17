import React, {
  Component,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import MoreStyles from '../styles/moreStyles';
import ImageBar from '../components/ImageBar';

class More extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired
  }

  render() {

    var { payload } = this.props;

    return (
      <View style={MoreStyles.container}>
        <ImageBar title="More" />
        <Text style={MoreStyles.title}>
          {payload.title}
        </Text>
        <Text style={MoreStyles.description}>
          {payload.body}
        </Text>
        <TouchableHighlight
          onPress={() => this.props.navigator.push({ name: 'instagram' })}
        >
          <Text>Instagram</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.navigator.push({ name: 'about' })}
        >
          <Text>About</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default More;
