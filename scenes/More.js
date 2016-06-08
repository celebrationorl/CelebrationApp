import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
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
import NextSteps from './NextSteps';

const iconSizes = 60,
  iconColor = '#171717';

const FacebookIcon = (<Icon name="social-facebook" size={iconSizes} color={iconColor} />);
const InstagramIcon = (<Ionicon name="logo-instagram" size={iconSizes} color={iconColor} />);
const TwitterIcon = (<Icon name="social-twitter" size={iconSizes} color={iconColor} />);
const MailIcon = (<Icon name="mail" size={iconSizes} color={iconColor} />);
const CloseIcon = (<Ionicon name="ios-close-outline" size={45} color={'white'} />);

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

  setMoreImageBar(title) {

    store.dispatch({
      type: 'SET_MORE_IMGBAR_TITLE',
      moreImageBarTitle: title
    })
  }

  getImageBarTitle() {

    var { moreImageBarTitle } = this.state;
    return moreImageBarTitle;

  }

  getModal() {

    var { modalType, aboutPayload, areaType, } = this.props;

    let modalContent = null;

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
    } else if (modalType === 'nextSteps') {
      modalContent = (<NextSteps />)
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
            <TouchableOpacity
              onPress={() => {
                  this.showModal('')
                  this.setMoreImageBar('More')
                }
              }
              style={MoreStyles.modalCloseButton}>
              {CloseIcon}
            </TouchableOpacity>
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

        <ImageBar
          title={this.getImageBarTitle()}
          imagePath={require('../assets/img/top_image_bar/top_image_bar_more.png')}
          />

        <View style={MoreStyles.blocks}>
          <View style={MoreStyles.row}>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('facebook')
                  this.setMoreImageBar('Facebook')
                }
              }
              style={MoreStyles.facebookBlock}>
              <View style={MoreStyles.blockInnerIcon}>
                {FacebookIcon}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('instagram')
                  this.setMoreImageBar('Instagram')
                }
              }
              style={MoreStyles.instagramBlock}>
              <View style={MoreStyles.blockInnerIcon}>
                {InstagramIcon}
              </View>
            </TouchableOpacity>
          </View>

          <View style={MoreStyles.row}>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('twitter')
                  this.setMoreImageBar('Twitter')
                }
              }
              style={MoreStyles.twitterBlock}
              >
              <View style={MoreStyles.blockInnerIcon}>
                {TwitterIcon}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('email')
                  this.setMoreImageBar('Contact')
                }
              }
              style={MoreStyles.mailBlock}
              >
              <View style={MoreStyles.blockInnerIcon}>
                {MailIcon}
              </View>
            </TouchableOpacity>
          </View>

          <View style={MoreStyles.separatedRow}>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('celebration')
                  this.setMoreImageBar('Celebration Website')
                }
              }
              style={MoreStyles.websiteBlock}
              >
              <View style={MoreStyles.blockInnerWebsiteText}>
                <Text style={MoreStyles.websiteBlockText}>
                  Website
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('about')
                  this.setMoreImageBar('About')
                }
              }
              style={MoreStyles.aboutBlock}
              >
              <View style={MoreStyles.blockInnerAboutText}>
                <Text style={MoreStyles.aboutBlockText}>
                  About
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={MoreStyles.row}>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('nextSteps')
                  this.setMoreImageBar('Next Steps')
                }
              }
              style={MoreStyles.nextStepsBlock}
              >
              <View style={MoreStyles.blockInnerNSText}>
                <Text style={MoreStyles.nextStepsBlockText}>
                  Next Steps
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('churchLife')
                  this.setMoreImageBar('Church Life')
                }
              }
              style={MoreStyles.churchLifeBlock}
              >
              <View style={MoreStyles.blockInnerCLText}>
                <Text style={MoreStyles.churchLifeBlockText}>
                  Church Life
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default More;
