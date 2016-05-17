import React, {
  Component,
  View,
  Text
} from 'react-native';

import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBarStyles from '../styles/tabBarStyles';

const VisitIcon = (<Icon name="map-marker" size={20} color="black" />)

class TabBar extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    page: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <Text>hi</Text>
      </View>
    );
  }
}

export default TabBar;
