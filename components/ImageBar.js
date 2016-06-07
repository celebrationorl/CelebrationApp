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
    title: React.PropTypes.string,
    imagePath: React.PropTypes.string
  }

  render() {

    let { title, imagePath } = this.props;

    if (!title) title = 'Title';

    return (
      <View style={ImageBarStyles.container}>
        <Image
          style={ImageBarStyles.bgImage}
          source={imagePath}
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
