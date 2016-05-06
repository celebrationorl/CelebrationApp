import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

import ButtonStyles from '../styles/buttons';
import HomeStyles from '../styles/homeStyles';
import Tabs from 'react-native-tabs';

class Home extends Component {

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
      <View style={HomeStyles.container}>
        <Text
          style={HomeStyles.title}
        >
          Welcome to The Celebration Church App
        </Text>
        <Tabs
          selected={'first'}
          style={{backgroundColor: 'white'}}
          selectedStyle={{color: 'lightgreen'}}
          onSelect={el => console.log(el)}
        >
          <Text name="first">First</Text>
          <Text name="second">Second</Text>
        </Tabs>
      </View>
    );
  }
}

// TODO: Remove below code on confirm of no further need
/*
<Image
  style={HomeStyles.bgImg}
  source={require('../assets/img/celebration_orl_background_pp.png')}>
  <Image
    style={HomeStyles.logo}
    source={require('../assets/img/celebration_logo.png')}
  />
  <Text style={HomeStyles.title}>
    {payload.title}
  </Text>
  <Text style={HomeStyles.body}>
    {payload.body}
  </Text>
  <TouchableHighlight
    onPress={this.props.onSceneSwitch}
    style={HomeStyles.button}>
    <Text style={HomeStyles.buttonText}>About</Text>
  </TouchableHighlight>
  <TouchableHighlight
    onPress={this.props.onSceneInstagram}
    style={HomeStyles.button}>
    <Text style={HomeStyles.buttonText}>Instagram</Text>
  </TouchableHighlight>
</Image>
*/

export default Home;
