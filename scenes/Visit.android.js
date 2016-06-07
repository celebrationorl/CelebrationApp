import React, {
  Component,
  View,
  Text,
  Image
} from 'react-native';

import VisitStyles from '../styles/visitStyles';
import ImageBar from '../components/ImageBar';

var celebrationLocationAndroid = require('../assets/img/celebration_location_android.png');

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
        <ImageBar
          title="Visit"
          imagePath={require('../assets/img/top_image_bar/top_image_bar_visit.png')}
          />
        <Text style={VisitStyles.body}>
          {payload.body}
        </Text>
        <View style={VisitStyles.androidMapGraphicWrapper}>
          <Image
            style={VisitStyles.androidMapGraphic}
            source={celebrationLocationAndroid}
          />
        </View>
      </View>
    );
  }
}

export default Visit;
