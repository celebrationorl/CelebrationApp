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
      <Tabs
        selected={this.props.page}
        style={TabBarStyles.tabs}
        selectedStyle={{color: 'lightgreen', fontWeight: '600'}}
        onSelect={tab => {
            this.props.navigator.replace({ name: tab.props.name })
          }
        }
      >
        <Text name="podcasts">Podcasts</Text>
        <Text name="prayer">Prayer</Text>
        <Text name="give">Give</Text>


        <Text name="visit">
          <Text style={TabBarStyles.icon}>
            {VisitIcon}
          </Text>
          Visit
        </Text>


        <Text name="more">More</Text>
      </Tabs>
    );
  }
}

export default TabBar;
