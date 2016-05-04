import React, {
  Component,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import ButtonStyles from '../styles/buttons';
import ContainerStyles from '../styles/containerStyles';

class About extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired,
    onSceneSwitch: React.PropTypes.func.isRequired,
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
        <TouchableHighlight
          onPress={this.props.onSceneSwitch}
          style={ButtonStyles.button}>
          <Text style={ButtonStyles.buttonText}>Home</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default About;
