import React, {
  Component,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import MoreStyles from '../styles/moreStyles';
import ImageBar from '../components/ImageBar';
import Icon from 'react-native-vector-icons/Foundation';

const iconSizes = 60,
  iconColor = '#171717';

const FacebookIcon = (<Icon name="social-facebook" size={iconSizes} color={iconColor} />);
const InstagramIcon = (<Icon name="social-instagram" size={iconSizes} color={iconColor} />);
const TwitterIcon = (<Icon name="social-twitter" size={iconSizes} color={iconColor} />);
const MailIcon = (<Icon name="mail" size={iconSizes} color={iconColor} />);

class More extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <View style={MoreStyles.container}>
        <ImageBar title="More" />
        <View style={MoreStyles.blocks}>
          <View style={MoreStyles.row}>
            <View style={MoreStyles.facebookBlock}>
              <TouchableHighlight style={MoreStyles.facebookIcon}>
                {FacebookIcon}
              </TouchableHighlight>
            </View>
            <View style={MoreStyles.instagramBlock}>
              <TouchableHighlight style={MoreStyles.instagramIcon}>
                {InstagramIcon}
              </TouchableHighlight>
            </View>
          </View>

          <View style={MoreStyles.row}>
            <View style={MoreStyles.twitterBlock}>
              <TouchableHighlight style={MoreStyles.facebookIcon}>
                {TwitterIcon}
              </TouchableHighlight>
            </View>
            <View style={MoreStyles.mailBlock}>
              <TouchableHighlight style={MoreStyles.instagramIcon}>
                {MailIcon}
              </TouchableHighlight>
            </View>
          </View>

          <View style={MoreStyles.separatedRow}>
            <View style={MoreStyles.websiteBlock}>
              <TouchableHighlight style={MoreStyles.facebookIcon}>
                <Text style={MoreStyles.websiteBlockText}>Website</Text>
              </TouchableHighlight>
            </View>
            <View style={MoreStyles.aboutBlock}>
              <TouchableHighlight style={MoreStyles.instagramIcon}>
                <Text style={MoreStyles.aboutBlockText}>About</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default More;
