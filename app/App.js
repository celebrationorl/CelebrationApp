var Firebase = require('firebase');

import React, {
  Component,
  View,
  Navigator
} from 'react-native';

import Home from '../scenes/Home';
import Podcasts from '../scenes/Podcasts';
import Prayer from '../scenes/Prayer';
import Give from '../scenes/Give';
import Visit from '../scenes/Visit';
import More from '../scenes/More';
import Instagram from '../scenes/Instagram';
import store from '../redux/appStore';
import scenesData from '../redux/scenesData';

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

  renderScene(route, nav) {

    switch (route.name) {
      case 'podcasts':
        return (
          <Podcasts
            navigator={nav}
            payload={this.getPagePayload('podcasts')}
          />
        );
      case 'prayer':
        return (
          <Prayer
            navigator={nav}
            payload={this.getPagePayload('prayer')}
          />
        );
      case 'give':
        return (
          <Give
            navigator={nav}
            payload={this.getPagePayload('give')}
          />
        );
      case 'visit':
        return (
          <Visit
            navigator={nav}
            payload={this.getPagePayload('visit')}
          />
        );
      case 'more':
        return (
          <More
            navigator={nav}
            payload={this.getPagePayload('more')}
          />
        );
      case 'instagram':
        return (
          <Instagram />
        );
      default:
        return (
          <Podcasts
            navigator={nav}
            payload={this.getPagePayload('podcasts')}
          />
      );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {

    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'podcasts', index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)} />
    );
  }
}

export default App;
