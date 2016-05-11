import React, {
  Component,
  MapView,
  View,
  Text
} from 'react-native';

import VisitStyles from '../styles/visitStyles';
import TabBar from '../components/TabBar';

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
        <Text style={VisitStyles.title}>
          {payload.title}
        </Text>
        <Text style={VisitStyles.body}>
          {payload.body}
        </Text>
          <MapView
            style={VisitStyles.map}
            annotations={[{
                latitude: 28.545540,
                longitude: -81.366941,
                title: 'Celebration Orlando Church',
                subtitle: '863 E Robinson St'
            }]}
            region={{
              latitude: 28.545540,
              longitude: -81.366941,
              latitudeDelta: parseFloat(0.01),
              longitudeDelta: parseFloat(0.01)
            }}
          />
        <TabBar navigator={this.props.navigator} page="visit" />
      </View>
    );
  }
}

export default Visit;
