import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Modal
} from 'react-native';

import MoreStyles from '../styles/moreStyles';
import ImageBar from '../components/ImageBar';
import Icon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import store from '../redux/appStore';

import About from './About';
import Email from './Email';
import Instagram from './Instagram';
import Twitter from './Twitter';
import Facebook from './Facebook';
import CelebrationSite from './CelebrationSite';
import ChurchLife from './ChurchLife';

const iconSizes = 60,
  iconColor = '#171717';

const FacebookIcon = (<Icon name="social-facebook" size={iconSizes} color={iconColor} />);
const InstagramIcon = (<Icon name="social-instagram" size={iconSizes} color={iconColor} />);
const TwitterIcon = (<Icon name="social-twitter" size={iconSizes} color={iconColor} />);
const MailIcon = (<Icon name="mail" size={iconSizes} color={iconColor} />);
const CloseIcon = (<Ionicon name="ios-close-outline" size={45 } color={'white'} />);

class More extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  showModal(modalType) {
    store.dispatch({
      type: 'SHOW_MODAL',
      modalType: modalType
    })
  }

  getModal() {

    var { modalType, aboutPayload } = this.props;

    let modalContent = null;

    // TODO: turn into switch statement
    if (modalType === 'about') {
      modalContent = (<About payload={aboutPayload} />)
    } else if (modalType === 'instagram') {
      modalContent = (<Instagram />)
    } else if (modalType === 'twitter') {
      modalContent = (<Twitter />)
    } else if (modalType === 'facebook') {
      modalContent = (<Facebook />)
    } else if (modalType === 'celebration') {
      modalContent = (<CelebrationSite />)
    } else if (modalType === 'email') {
      modalContent = (<Email />)
    } else if (modalType === 'churchLife') {
      modalContent = (<ChurchLife />)
    }

    return (
      <Modal
        animationType="slide"
        animated={true}
        transparent={true}
        visible={this.props.modalVisibility}
        onRequestClose={() => this.showModal('')}
        >
        <View style={MoreStyles.modalContainer}>
          <View style={MoreStyles.modalInnerContainer}>
            <TouchableHighlight
              onPress={() => this.showModal('')}
              style={MoreStyles.modalCloseButton}>
              {CloseIcon}
            </TouchableHighlight>
            {modalContent}
          </View>
        </View>
      </Modal>
    );
  }

  render() {

    return (
      <View style={MoreStyles.container}>

        {this.getModal()}

        <ImageBar title="More" />

        <View style={MoreStyles.blocks}>
          <View style={MoreStyles.row}>
            <View style={MoreStyles.facebookBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('facebook')}
                style={MoreStyles.facebookIcon}
                >
                {FacebookIcon}
              </TouchableHighlight>
            </View>
            <View style={MoreStyles.instagramBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('instagram')}
                style={MoreStyles.instagramIcon}>
                {InstagramIcon}
              </TouchableHighlight>
            </View>
          </View>

          <View style={MoreStyles.row}>
            <View style={MoreStyles.twitterBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('twitter')}
                style={MoreStyles.facebookIcon}
                >
                {TwitterIcon}
              </TouchableHighlight>
            </View>
            <View style={MoreStyles.mailBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('email')}
                style={MoreStyles.instagramIcon}
                >
                {MailIcon}
              </TouchableHighlight>
            </View>
          </View>

          <View style={MoreStyles.separatedRow}>
            <View style={MoreStyles.websiteBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('celebration')}
                style={MoreStyles.facebookIcon}
                >
                <Text style={MoreStyles.websiteBlockText}>
                  Website
                </Text>
              </TouchableHighlight>
            </View>
            <View style={MoreStyles.aboutBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('about')}
                style={MoreStyles.instagramIcon}
                >
                <Text style={MoreStyles.aboutBlockText}>
                  About
                </Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={MoreStyles.row}>
            <View style={MoreStyles.nextStepsBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('nextSteps')}
                style={MoreStyles.instagramIcon}
                >
                <Text style={MoreStyles.nextStepsBlockText}>
                  Next Steps
                </Text>
              </TouchableHighlight>
            </View>
            <View style={MoreStyles.churchLifeBlock}>
              <TouchableHighlight
                onPress={() => this.showModal('churchLife')}
                style={MoreStyles.instagramIcon}
                >
                <Text style={MoreStyles.churchLifeBlockText}>
                  Church Life
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default More;
