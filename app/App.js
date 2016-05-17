var Firebase = require('firebase');

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

import Icon from 'react-native-vector-icons/Ionicons';

      // Podcasts icons
const PodcastsIconOutline = (<Icon name="ios-mic-outline" size={30} color="black" />)
      PodcastsIcon = (<Icon name="ios-mic" size={30} color="black" />),
      // Prayer icons
      PrayerIconOutline = (<Icon name="ios-heart-outline" size={30} color="black" />),
      PrayerIcon = (<Icon name="ios-heart" size={30} color="black" />),
      // Give icon
      GiveIconOutline = (<Icon name="ios-flame-outline" size={30} color="black" />),
      GiveIcon = (<Icon name="ios-flame" size={30} color="black" />),
      // Visit icon
      VisitIconOutline = (<Icon name="ios-location-outline" size={30} color="black" />),
      VisitIcon = (<Icon name="ios-location" size={30} color="black" />),
      // More icon
      MoreIconOutline = (<Icon name="ios-list-outline" size={30} color="black" />),
      MoreIcon = (<Icon name="ios-list" size={30} color="black" />);

const buildStyleInterpolator = require('buildStyleInterpolator');

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
      <TabNavigator tabBarStyle={{ paddingBottom: 5 }}>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'podcasts'}
          title="Podcasts"
          renderIcon={() => PodcastsIconOutline}
          renderSelectedIcon={() => PodcastsIcon}
          onPress={() => this.setState({ selectedTab: 'podcasts' })}>
          <Podcasts />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'prayer'}
          title="Prayer"
          renderIcon={() => PrayerIconOutline}
          renderSelectedIcon={() => PrayerIcon}
          onPress={() => this.setState({ selectedTab: 'prayer' })}>
          <Prayer payload={this.getPagePayload('prayer')} />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'give'}
          title="Give"
          renderIcon={() => GiveIconOutline}
          renderSelectedIcon={() => GiveIcon}
          onPress={() => this.setState({ selectedTab: 'give' })}>
          <Give payload={this.getPagePayload('give')} />
        </TabNavigator.Item>

      </TabNavigator>
    );
  }
}

export default App;

// <TabNavigator.Item
//   selected={this.state.selectedTab === 'visit'}
//   title="Visit"
//   renderIcon={() => VisitIcon}
//   renderSelectedIcon={() => VisitIcon}
//   onPress={() => this.setState({ selectedTab: 'visit' })}>
//   <Visit payload={this.getPagePayload('visit')} />
// </TabNavigator.Item>
//
// <TabNavigator.Item
//   selected={this.state.selectedTab === 'more'}
//   title="More"
//   renderIcon={() => MoreIcon}
//   renderSelectedIcon={() => MoreIcon}
//   onPress={() => this.setState({ selectedTab: 'more' })}>
//   <More payload={this.getPagePayload('more')} />
// </TabNavigator.Item>




// renderScene(route, nav) {
//
//   switch (route.name) {
//     case 'podcasts':
//       return (
//         <Podcasts
//           navigator={nav}
//         />
//       );
//     case 'prayer':
//       return (
//         <Prayer
//           navigator={nav}
//           payload={this.getPagePayload('prayer')}
//         />
//       );
//     case 'give':
//       return (
//         <Give
//           navigator={nav}
//           payload={this.getPagePayload('give')}
//         />
//       );
//     case 'visit':
//       return (
//         <Visit
//           navigator={nav}
//           payload={this.getPagePayload('visit')}
//         />
//       );
//     case 'more':
//       return (
//         <More
//           navigator={nav}
//           payload={this.getPagePayload('more')}
//         />
//       );
//     case 'instagram':
//       return (
//         <Instagram />
//       );
//     case 'about':
//       return (
//         <About
//           navigator={nav}
//           payload={this.getPagePayload('about')}
//         />
//       );
//     default:
//       return (
//         <Podcasts
//           navigator={nav}
//         />
//     );
//   }
// }
//
//
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
