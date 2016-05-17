import React, {
  Component,
  View,
  Text
} from 'react-native';

import AboutStyles from '../styles/aboutStyles';
// import TabBar from '../components/TabBar';

class About extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired
  }

  render() {

    var { payload } = this.props;

    return (
      <View style={AboutStyles.container}>
        <Text style={AboutStyles.title}>
          {payload.title}
        </Text>
        <Text style={AboutStyles.description}>
          {payload.body}
        </Text>
      </View>
    );
  }
}

export default About;

// <TabBar navigator={this.props.navigator} page="about" />
