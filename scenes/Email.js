import React, {
  Component,
  View,
  Text
} from 'react-native';

import EmailStyles from '../styles/emailStyles';
import * as Animatable from 'react-native-animatable';

class Email extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.refs.outerView.bounceInUp(800);
    this.refs.innerView.bounceInUp(900);
  }

  render() {

    return (
      <Animatable.View ref="outerView" style={EmailStyles.container}>
        <Animatable.View ref="innerView" style={EmailStyles.innerContainer}>
          <View style={EmailStyles.contactChunck}>
            <Text style={EmailStyles.contactTitle}>
              General Email
            </Text>
            <Text style={EmailStyles.contactParagraph}>
              celebration@celebrationorl.org
            </Text>
          </View>

          <View style={EmailStyles.contactChunck}>
            <Text style={EmailStyles.contactTitle}>
              Giving Email
            </Text>
            <Text style={EmailStyles.contactParagraph}>
              give@celebrationorl.org
            </Text>
          </View>

          <View style={EmailStyles.contactChunck}>
            <Text style={EmailStyles.contactTitle}>
              Student Pastor Email
            </Text>
            <Text style={EmailStyles.contactParagraph}>
              jdelacruz@celebrationorl.org
            </Text>
          </View>

          <View style={EmailStyles.contactChunck}>
            <Text style={EmailStyles.contactTitle}>
              Outreach/Missions Email
            </Text>
            <Text style={EmailStyles.contactParagraph}>
              outreach@celebrationorl.org
            </Text>
          </View>

          <View style={EmailStyles.contactChunck}>
            <Text style={EmailStyles.contactTitle}>
              Community Groups Email
            </Text>
            <Text style={EmailStyles.contactParagraph}>
              groups@celebrationorl.org
            </Text>
          </View>
        </Animatable.View>
      </Animatable.View>
    );
  }
}

export default Email;
