import React, {
  Component,
  View,
  Text
} from 'react-native';

import VisitStyles from '../styles/visitStyles';
import TabBar from '../components/TabBar';

class Visit extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired,
  }

  render() {

    var {payload} = this.props;

    return (
      <View style={VisitStyles.container}>
        <Text style={VisitStyles.title}>
          {payload.title}
        </Text>
        <Text style={VisitStyles.body}>
          {payload.body}
        </Text>
        <TabBar navigator={this.props.navigator} page="visit" />
      </View>
    );
  }
}

export default Visit;
