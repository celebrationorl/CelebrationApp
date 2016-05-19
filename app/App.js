import React, {
  Component,
  View,
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from '../scenes/Home';
import About from '../scenes/About';
import Podcasts from '../scenes/Podcasts';
import Prayer from '../scenes/Prayer';
import Give from '../scenes/Give';
import Visit from '../scenes/Visit';
import More from '../scenes/More';
import Instagram from '../scenes/Instagram';

import store from '../redux/appStore';
import scenesData from '../redux/scenesData';

import TabBarStyles from '../styles/tabBarStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const iconSizes = 24,
  iconColor = '#171717';

      // Podcasts icon
const PodcastsIconOutline = (<Icon name="ios-mic-outline" size={iconSizes} color={iconColor} />)
      PodcastsIcon = (<Icon name="ios-mic" size={iconSizes} color={iconColor} />),
      // Prayer icons
      PrayerIconOutline = (<Icon name="ios-heart-outline" size={iconSizes} color={iconColor} />),
      PrayerIcon = (<Icon name="ios-heart" size={iconSizes} color={iconColor} />),
      // Give icon
      GiveIconOutline = (<Icon name="ios-flame-outline" size={iconSizes} color={iconColor} />),
      GiveIcon = (<Icon name="ios-flame" size={iconSizes} color={iconColor} />),
      // Visit icon
      VisitIconOutline = (<Icon name="ios-pin-outline" size={iconSizes} color={iconColor} />),
      VisitIcon = (<Icon name="ios-pin" size={iconSizes} color={iconColor} />),
      // More icon
      MoreIconOutline = (<Icon name="ios-paper-outline" size={iconSizes} color={iconColor} />),
      MoreIcon = (<Icon name="ios-paper" size={iconSizes} color={iconColor} />);


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount() {
    store.dispatch({
      type: 'GET_PAGE',
      page: scenesData.pages
    })
  }

  getPagePayload(type) {

    var {page} = this.state;

    var payload = {
      title: '',
      body: ''
    }

    if (page) {
      payload = {
        title: page[type].title,
        body: page[type].body
      }
    }

    return payload;

  }

  render() {

    return (
      <TabNavigator tabBarStyle={TabBarStyles.tabNavigator}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'podcasts'}
          titleStyle={TabBarStyles.title}
          selectedTitleStyle={TabBarStyles.titleSelected}
          title="Podcasts"
          renderIcon={() => PodcastsIconOutline}
          renderSelectedIcon={() => PodcastsIcon}
          onPress={() => this.setState({ selectedTab: 'podcasts' })}>
          <Podcasts />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'prayer'}
          titleStyle={TabBarStyles.title}
          selectedTitleStyle={TabBarStyles.titleSelected}
          title="Prayer"
          renderIcon={() => PrayerIconOutline}
          renderSelectedIcon={() => PrayerIcon}
          onPress={() => this.setState({ selectedTab: 'prayer' })}>
          <Prayer payload={this.getPagePayload('prayer')} />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'give'}
          titleStyle={TabBarStyles.title}
          selectedTitleStyle={TabBarStyles.titleSelected}
          title="Give"
          renderIcon={() => GiveIconOutline}
          renderSelectedIcon={() => GiveIcon}
          onPress={() => this.setState({ selectedTab: 'give' })}>
          <Give />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'visit'}
          titleStyle={TabBarStyles.title}
          selectedTitleStyle={TabBarStyles.titleSelected}
          title="Visit"
          renderIcon={() => VisitIconOutline}
          renderSelectedIcon={() => VisitIcon}
          onPress={() => this.setState({ selectedTab: 'visit' })}>
          <Visit payload={this.getPagePayload('visit')} />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'more'}
          titleStyle={TabBarStyles.title}
          selectedTitleStyle={TabBarStyles.titleSelected}
          title="More"
          renderIcon={() => MoreIconOutline}
          renderSelectedIcon={() => MoreIcon}
          onPress={() => this.setState({ selectedTab: 'more' })}>
          <More />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

export default App;

// configureScene() {
//
//   var NoTransition = {
//     opacity: {
//       from: 1,
//       to: 1,
//       min: 1,
//       max: 1,
//       type: 'linear',
//       extrapolate: false,
//       round: 100,
//     },
//   };
//
//   return {
//     ...Navigator.SceneConfigs.FadeAndroid,
//     gestures: null,
//     defaultTransitionVelocity: 1000,
//     animationInterpolators: {
//         into: buildStyleInterpolator(NoTransition),
//         out: buildStyleInterpolator(NoTransition)
//     }
//   }
//
// }
