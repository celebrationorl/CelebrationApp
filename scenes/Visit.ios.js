import React, {
  Component,
  View,
  Text
} from 'react-native';

import VisitStyles from '../styles/visitStyles';
import ImageBar from '../components/ImageBar';
import Weblay from '../components/Weblay';

var injectedJSCode = `

  document.querySelector(".ml-promotion-container visible").style.display = "none";

`;

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
        <Weblay
          type="visit"
          title="LOADING CELEBRATION LOCATION"
          uri="https://www.google.com/maps/dir/28.5374609,-81.3792545/800+E+Robinson+St,+Orlando,+FL+32801/@28.541268,-81.3755643,16.2z/data=!4m6!4m5!1m0!1m2!1m1!1s0x88e77ae6a08cf3bf:0xf92e97da5fdf0b0a!3e0"
          injectedJSCode={injectedJSCode}
          />

      </View>
    );
  }
}

// NOTE: For possible future use on ios...
// <MapView
//   style={VisitStyles.map}
//   annotations={[{
//       latitude: 28.545540,
//       longitude: -81.366941,
//       title: 'Celebration Orlando Church',
//       subtitle: '863 E Robinson St'
//   }]}
//   region={{
//     latitude: 28.545540,
//     longitude: -81.366941,
//     latitudeDelta: parseFloat(0.01),
//     longitudeDelta: parseFloat(0.01)
//   }}
// />

export default Visit;
