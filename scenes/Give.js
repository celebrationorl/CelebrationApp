import React, {
  Component,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Text
} from 'react-native';

import GiveStyles from '../styles/giveStyles';
import ImageBar from '../components/ImageBar';
import GivingOptions from '../components/GivingOptions';
import store from '../redux/appStore';

import Ionicon from 'react-native-vector-icons/Ionicons';
const CloseIcon = (<Ionicon name="ios-close-outline" size={45} color={'white'} />);

let givingOptions = [
  'giveLogin',
  'givePayPal',
  'giveText',
  'giveBank',
  'giveDonations',
  'giveAsset'
];

class Give extends Component {

  constructor(props, context) {

    super(props, context);

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

    let { modalType } = this.props;

    let modalContent = null;

    if (modalType === 'giveLogin') {
      modalContent = (<GivingOptions type={modalType} />)
    } else if (modalType === 'givePayPal') {
      modalContent = (<GivingOptions type={modalType} />)
    } else if (modalType === 'giveText') {
      modalContent = (<GivingOptions type={modalType} />)
    } else if (modalType === 'giveBank') {
      modalContent = (<GivingOptions type={modalType} />)
    } else if (modalType === 'giveDonations') {
      modalContent = (<GivingOptions type={modalType} />)
    } else if (modalType === 'giveAsset') {
      modalContent = (<GivingOptions type={modalType} />)
    }

    return (
      <Modal
        animationType="slide"
        animated={true}
        transparent={true}
        visible={this.props.modalVisibility}
        onRequestClose={() => this.showModal('')}
        >
        <View style={GiveStyles.modalContainer}>
          <View style={GiveStyles.modalInnerContainer}>
            <TouchableOpacity
              onPress={() => {
                  this.showModal('')
                }
              }
              style={GiveStyles.modalCloseButton}>
              {CloseIcon}
            </TouchableOpacity>
            {modalContent}
          </View>
        </View>
      </Modal>
    );
  }

  _getGivingOptions(option) {

    let title = '';

    if (option === 'giveLogin') {
      title = 'Login to Give';
    } else if (option === 'givePayPal') {
      title = 'Give via PayPal';
    } else if (option === 'giveText') {
      title = 'Give via Text';
    } else if (option === 'giveBank') {
      title = 'Use Your Own Bank';
    } else if (option === 'giveDonations') {
      title = 'Matching Donations'
    } else if (option === 'giveAsset') {
      title = 'Asset Giving';
    }

    return (
      <View style={GiveStyles.optionWrapper}>

        <View style={GiveStyles.option}>
          <TouchableOpacity
            onPress={() => {
                this.showModal(option);
              }
            }
            style={GiveStyles.optionButton}
            >
            <Text style={GiveStyles.optionButtonText}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  render() {

    return (
      <View style={GiveStyles.container}>

        {this.getModal()}

        <ImageBar
          title="Give"
          imagePath={require('../assets/img/top_image_bar/top_image_bar_give.png')}
          />

        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={GiveStyles.scrollView}
          >
          {givingOptions.map((option) => this._getGivingOptions(option))}
        </ScrollView>

      </View>
    )
  }
}

export default Give;
