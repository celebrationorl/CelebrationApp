import React, {
  Component,
  View,
  Text
} from 'react-native';

import Tabs from 'react-native-tabs';
import TabBarStyles from '../styles/tabBarStyles';

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
        style={{backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: 'lightgrey'}}
        selectedStyle={{color: 'lightgreen', fontWeight: '600'}}
        onSelect={tab => {
            this.props.navigator.replace({ name: tab.props.name })
          }
        }
      >
        <Text name="podcasts">Podcasts</Text>
        <Text name="prayer">Prayer</Text>
        <Text name="give">Give</Text>
        <Text name="visit">Visit</Text>
        <Text name="more">More</Text>
      </Tabs>
    );
  }
}

export default TabBar;
