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
import store from '../redux/appStore';

const iconSizes = 60,
  iconColor = '#171717';

const FacebookIcon = (<Icon name="social-facebook" size={iconSizes} color={iconColor} />);
const InstagramIcon = (<Icon name="social-instagram" size={iconSizes} color={iconColor} />);
const TwitterIcon = (<Icon name="social-twitter" size={iconSizes} color={iconColor} />);
const MailIcon = (<Icon name="mail" size={iconSizes} color={iconColor} />);

class More extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount() {
    store.dispatch({
      type: 'SHOW_MODAL',
      modalType: ''
    })

    var { modalType } = this.state;

    console.log(this.state);
  }

  _showModal(modalType) {
    console.log(this.state);
    store.dispatch({
      type: 'SHOW_MODAL',
      modalType: modalType
    })
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
              <TouchableHighlight
                onPress={() => this._showModal('about')}
                style={MoreStyles.instagramIcon}>
                <Text style={MoreStyles.aboutBlockText}>About</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>


      </View>
    )
  }
}

// <Modal
//   animationType="slide"
//   visible={this.state.modalVisible}
//   onRequestClose={() => {this._showModal(false)}}
//   >
//   <View>
//     <TouchableHighlight
//       onPress={this._showModal.bind(false)}
//       style={styles.modalButton}>
//       Close
//     </TouchableHighlight>
//   </View>
// </Modal>

export default More;
