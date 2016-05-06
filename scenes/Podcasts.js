import React, {
  Component,
  View,
  Text
} from 'react-native';

import ContainerStyles from '../styles/containerStyles';
import TabBar from '../components/TabBar';

class Podcasts extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired,
  }

  render() {

    var {payload} = this.props;

    return (
      <View style={ContainerStyles.container}>
        <Text style={ContainerStyles.title}>
          {payload.title}
        </Text>
        <Text style={ContainerStyles.description}>
          {payload.body}
        </Text>
        <TabBar navigator={this.props.navigator} page="podcasts" />
      </View>
    )
  }
}

export default Podcasts;
