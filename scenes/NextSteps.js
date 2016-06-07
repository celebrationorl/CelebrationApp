import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import NextStepsStyles from '../styles/nextStepsStyles';
import NextStepsArea from '../components/NextStepsArea';
import * as Animatable from 'react-native-animatable';

import store from '../redux/appStore';

class NextSteps extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount() {
    this.refs.outerView.bounceInUp(800);
    this.refs.innerView.bounceInUp(900);
  }

  setNextStepsAreaType(areaType) {
    store.dispatch({
      type: 'SET_NEXT_STEPS_AREA',
      nextStepsAreaType: areaType
    })
  }

  getNextStepsAreaType() {
    var { nextStepsAreaType } = this.state;
    return nextStepsAreaType;
  }

  render() {

    let nextStepsAreaType = this.getNextStepsAreaType();

    let preschoolBtnStyle = {},
      kidsBtnStyle = {},
      superSquadBtnStyle = {};

    if (nextStepsAreaType === 'communityGroups') {
      preschoolBtnStyle = {color: '#171717'}
    } else if (nextStepsAreaType === 'godLife') {
      kidsBtnStyle = {color: '#171717'}
    } else if (nextStepsAreaType === 'baptisms') {
      superSquadBtnStyle = {color: '#171717'}
    }

    return (
      <Animatable.View
        ref="outerView"
        style={NextStepsStyles.container}>
        <Animatable.View
          ref="innerView"
          style={NextStepsStyles.container}>
          <View style={NextStepsStyles.areasWrapper}>
            <View style={NextStepsStyles.row}>
              <View style={NextStepsStyles.area}>
                <TouchableOpacity
                  onPress={() => this.setNextStepsAreaType('communityGroups')}
                  >
                  <Text
                    style={[NextStepsStyles.areaTitleText, preschoolBtnStyle]}
                    >
                    COMMUNITY GROUPS
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={NextStepsStyles.area}>
                <TouchableOpacity
                  onPress={() => this.setNextStepsAreaType('godLife')}
                  >
                  <Text
                    style={[NextStepsStyles.areaTitleText, kidsBtnStyle]}
                    >
                    GOD-FIRST LIFE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={NextStepsStyles.row}>
              <View style={NextStepsStyles.area}>
                <TouchableOpacity
                  onPress={() => this.setNextStepsAreaType('baptisms')}
                  >
                  <Text
                    style={[NextStepsStyles.areaTitleText, superSquadBtnStyle]}
                    >
                    WATER BAPTISMS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}
            style={NextStepsStyles.scrollView}
            >
            <NextStepsArea nextStepsAreaType={this.getNextStepsAreaType()} />
          </ScrollView>
        </Animatable.View>
      </Animatable.View>
    );
  }
}

export default NextSteps;
