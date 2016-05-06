import React, {
  Component,
  View,
  Text
} from 'react-native';

import MoreStyles from '../styles/moreStyles';
import TabBar from '../components/TabBar';

class More extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired,
  }

  render() {

    var {payload} = this.props;

    return (
      <View style={MoreStyles.container}>
        <Text style={MoreStyles.title}>
          {payload.title}
        </Text>
        <Text style={MoreStyles.description}>
          {payload.body}
        </Text>
        <TabBar navigator={this.props.navigator} page="more" />
      </View>
    )
  }
}

export default More;
