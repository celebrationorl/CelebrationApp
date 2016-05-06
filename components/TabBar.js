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
        style={{backgroundColor: 'lightgrey'}}
        selectedStyle={{color: 'darkgrey', fontWeight: 'bold'}}
        onSelect={el => console.log(el)}
      >
        <Text name="home">Home</Text>
        <Text name="about">About</Text>
        <Text name="give">Give</Text>
        <Text name="visit">Visit</Text>
        <Text name="more">More</Text>
      </Tabs>
    );
  }
}

export default TabBar;
