import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native';

import ImageBarStyles from '../styles/imageBarStyles';

class ImageBar extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    title: React.PropTypes.string
  }

  render() {

    // TODO: Allow background image to be pass-in-able

    let { title } = this.props;

    if (!title) title = 'Title';

    return (
      <View style={ImageBarStyles.container}>
        <Image
          style={ImageBarStyles.bgImage}
          source={require('../assets/img/celebration_imgbar_bg_1.png')}
        >
          <Text style={ImageBarStyles.title}>
            {title}
          </Text>
        </Image>
      </View>
    );
  }

}

export default ImageBar;
