import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import HomeStyles from '../styles/homeStyles';

class Home extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={HomeStyles.container}>
        <Image
          style={HomeStyles.bgImg}
          source={require('../assets/img/celebration_orl_background_pp.png')}>
          <Image
            style={HomeStyles.logo}
            source={require('../assets/img/celebration_logo.png')}
          />
          <Text
            style={HomeStyles.title}
          >
            Welcome to The Celebration Church App
          </Text>
          <TouchableOpacity
            onPress={this.props.onSceneSwitch}
            style={HomeStyles.button}>
            <Text style={HomeStyles.buttonText}>About</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

export default Home;
