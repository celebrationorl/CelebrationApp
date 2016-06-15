import React, {
  Component,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import GivingOptionsStyles from '../styles/givingOptionsStyles';
import Weblay from '../components/Weblay';
import * as Animatable from 'react-native-animatable';

class GivingOptions extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    type: React.PropTypes.string
  }

  componentDidMount() {
    this.refs.outerView.bounceInUp(800);
    this.refs.innerView.bounceInUp(900);
  }

  render() {

    let { type } = this.props;

    let areaContent = null;

    if (type === 'giveLogin') {
      areaContent = (
        <View style={GivingOptionsStyles.body}>
          <View style={GivingOptionsStyles.primaryTextWrapper}>
            <Text style={GivingOptionsStyles.primaryText}>
              LOGIN OR SIGNUP TO GIVE
            </Text>
          </View>
          <Text style={GivingOptionsStyles.secondaryText}>
            1. Give at your convenience or set-up recurring giving.
          </Text>
          <Text style={GivingOptionsStyles.secondaryText}>
            2. Access online statements without hassle.
          </Text>

          <View style={GivingOptionsStyles.weblaySectionWrapper}>
            <View style={GivingOptionsStyles.weblay}>
              <Weblay
                hasBackNav
                backNavText="BACK"
                type="giveLogin"
                title="LOADING CELEBRATION LOGIN"
                uri="https://celebrationo.infellowship.com/UserLogin/Index?ReturnUrl=%2fonlinegiving%2fgivenow%2fstep1"
                />
            </View>
          </View>
        </View>
      );
    } else if (type === 'givePayPal') {
      areaContent = (
        <View style={GivingOptionsStyles.body}>
          <View style={GivingOptionsStyles.primaryTextWrapper}>
            <Text style={GivingOptionsStyles.primaryText}>
              GIVE VIA PAYPAL
            </Text>
          </View>
          <View style={GivingOptionsStyles.weblaySectionWrapper}>
            <View style={GivingOptionsStyles.weblay}>
              <Weblay
                type="givePayPal"
                title="LOADING CELEBRATION PAYPAL"
                uri="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EEBAVHQU4SWEE"
                />
            </View>
          </View>
        </View>
      );
    } else if (type === 'giveText') {
      areaContent = (
        <View style={GivingOptionsStyles.optionDetailSection}>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}
            style={GivingOptionsStyles.scrollView}
            >
            <View style={GivingOptionsStyles.body}>
              <View style={GivingOptionsStyles.primaryTextWrapper}>
                <Text style={GivingOptionsStyles.primaryText}>
                  GIVE VIA TEXT
                </Text>
              </View>
              <Text style={GivingOptionsStyles.secondaryText}>
                Giving via text from your smart phone is a fast, convenient
                way to give. If you currently give via cedit card during the
                service this is great alternative that will save you time. Text
                giving uses a simple very secure one time set up process done
                from your phone that will enable you to give donations with
                just one text.
              </Text>
              <Text style={GivingOptionsStyles.secondaryText}>
                From your phone’s SMS messaging, text the amount of your gift
                to 407-477-4745 (Orlando Campus).
              </Text>

              <Text style={GivingOptionsStyles.subPrimaryText}>
                Example:
              </Text>
              <Text style={GivingOptionsStyles.subSecondaryText}>
                Text $270 Tithe to 407-477-4745
              </Text>

              <Text style={GivingOptionsStyles.subPrimaryText}>
                Keywords:
              </Text>
              <Text style={GivingOptionsStyles.secondaryText}>
                Tell us what you’re giving toward.
                Tithe, Heart (for the House), Offering, Missions (Ex. $100 Offering)
              </Text>

              <Text style={GivingOptionsStyles.secondaryText}>
                If you’re new, you’ll be prompted to complete your Name, Email Address, Credit Card # and Expiration Date. You’re done!
              </Text>
              <Text style={GivingOptionsStyles.secondaryText}>
                You’ll receive a confirmation text and email of your gift.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else if (type === 'giveBank') {
      areaContent = (
        <View style={GivingOptionsStyles.optionDetailSection}>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}
            style={GivingOptionsStyles.scrollView}
            >
              <View style={GivingOptionsStyles.body}>
                <View style={GivingOptionsStyles.primaryTextWrapper}>
                  <Text style={GivingOptionsStyles.primaryText}>
                    USE YOUR BANK
                  </Text>
                </View>
                <Text style={GivingOptionsStyles.secondaryText}>
                  Personal Online Banking is a common way of giving
                  via your checking or savings account. Simply log onto
                  your bank’s website to access your personal account,
                  and follow their instructions for adding Celebration Church
                  as a new payee. Enter your donation, and your bank will send
                  Celebration Church a check. Our payee information is as follows:
                </Text>
                <Text style={GivingOptionsStyles.secondaryText}>
                  Celebration Church Orlando
                  PO BOX 536666
                  Orlando, Fl 32853
                </Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (type === 'giveDonations') {
        areaContent = (
          <View style={GivingOptionsStyles.optionDetailSection}>
            <ScrollView
              ref={(scrollView) => { _scrollView = scrollView; }}
              automaticallyAdjustContentInsets={false}
              scrollEventThrottle={200}
              style={GivingOptionsStyles.scrollView}
              >
              <View style={GivingOptionsStyles.body}>
                <View style={GivingOptionsStyles.primaryTextWrapper}>
                  <Text style={GivingOptionsStyles.primaryText}>
                    MATCHING DONATIONS
                  </Text>
                </View>
                <Text style={GivingOptionsStyles.secondaryText}>
                  Many employers and organizations offer Charitable Gift
                  Matching programs that enable you to double, sometimes
                  triple your gift. Some will even match gifts made by retirees
                  and/or spouses. Inquire with your employer to check program
                  availability. Any required paperwork may be mailed to:
                </Text>
                <Text style={GivingOptionsStyles.secondaryText}>
                  Celebration Church Orlando
                  PO BOX 536666
                  Orlando, Fl 32853
                </Text>
              </View>
            </ScrollView>
          </View>
      );
    } else if (type === 'giveAsset') {
      areaContent = (
        <View style={GivingOptionsStyles.optionDetailSection}>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}
            style={GivingOptionsStyles.scrollView}
            >
            <View style={GivingOptionsStyles.body}>
              <View style={GivingOptionsStyles.primaryTextWrapper}>
                <Text style={GivingOptionsStyles.primaryText}>
                  ASSET GIVING
                </Text>
              </View>
              <Text style={GivingOptionsStyles.secondaryText}>
                If you have stocks, bonds, mutual funds, precious metals,
                vehicles or any other assets that you would like to donate to
                Celebration Church, please contact our giving office.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }

    return (
      <Animatable.View
        ref="outerView"
        style={GivingOptionsStyles.container}
        >
          <Animatable.View ref="innerView">
            {areaContent}
          </Animatable.View>
      </Animatable.View>
    );
  }

}

export default GivingOptions;
