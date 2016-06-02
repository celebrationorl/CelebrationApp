import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import ButtonStyles from '../styles/buttons';
import HomeStyles from '../styles/homeStyles';

class Home extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    // var {payload} = this.props;

    return (
      <View style={HomeStyles.container}>
        <Text
          style={HomeStyles.title}
        >
          Welcome to The Celebration Church App
        </Text>
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
  <TouchableOpacity
    onPress={this.props.onSceneSwitch}
    style={HomeStyles.button}>
    <Text style={HomeStyles.buttonText}>About</Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={this.props.onSceneInstagram}
    style={HomeStyles.button}>
    <Text style={HomeStyles.buttonText}>Instagram</Text>
  </TouchableOpacity>
</Image>
*/

export default Home;
