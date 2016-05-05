var Firebase = require('firebase');

import React, {
  Component,
  View,
  Navigator
} from 'react-native';

import Home from '../scenes/Home';
import About from '../scenes/About';
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

  onSceneForward() {
    this.nav.push({
      name: 'about',
      index: 1
    });
  }

  onSceneInstagram() {
    this.nav.push({
      name: 'instagram',
      index: 2
    });
  }

  onSceneBack() {
    this.nav.pop();
  }

  getPagePayload(type) {

    var {page} = this.state;

    console.log('state: ', page);

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
      case 'about':
        return (
          <About
            payload={this.getPagePayload('about')}
            onSceneSwitch={this.onSceneBack.bind(this)} />
        );
      case 'home':
        return (
          <Home
            payload={this.getPagePayload('home')}
            onSceneSwitch={this.onSceneForward.bind(this)}
            onSceneInstagram={this.onSceneInstagram.bind(this)} />
        );
      case 'instagram':
        return (
          <Instagram
            onSceneSwitch={this.onSceneBack.bind(this)} />
        );
      default:
        return (
          <Home
            payload={this.getPagePayload('home')}
            onSceneSwitch={this.onSceneBack.bind(this)}
            onSceneInstagram={this.onSceneInstagram.bind(this)} />
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
        initialRoute={{ name: 'home', index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)} />
    );
  }
}

export default App;
