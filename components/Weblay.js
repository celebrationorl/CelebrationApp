import React, {
  Component,
  View,
  Text,
  WebView,
  TouchableOpacity,
} from 'react-native';

import WebviewOverlayStyles from '../styles/webviewOverlayStyles';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/EvilIcons';
import store from '../redux/appStore';
// var reactMixin = require('react-mixin');
// var TimerMixin = require('react-timer-mixin');

const BackIcon = (<Icon name="chevron-left" size={45} color={'#171717'} />);
const SpinnerIcon = (<Icon name="spinner-3" size={50} color="#171717" />)

class Weblay extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  propTypes: {
    title: React.PropTypes.string,
    uri: React.PropTypes.string,
    injectedJSCode: React.PropTypes.string,
    type: React.PropTypes.string,
    backNavText: React.PropTypes.string,
    hasBackNav: React.PropTypes.bool,
    detailedPresentation: React.PropTypes.object,
    webviewStyles: React.PropTypes.object
  }

  getLoadingIndicator(title) {

    return this.props.detailedPresentation ? (
      <Animatable.View ref="wvloading">
        {this.props.detailedPresentation}
        <View style={WebviewOverlayStyles.webviewOverlayPresentation}>
          <Text style={WebviewOverlayStyles.loadingTitle}>
            {title}
          </Text>
          <Animatable.View
            animation="rotate"
            easing="linear"
            iterationCount="infinite"
            style={WebviewOverlayStyles.animator}
            >
            {SpinnerIcon}
          </Animatable.View>
        </View>
      </Animatable.View>
    ) : (
      <View style={WebviewOverlayStyles.webviewOverlay}>
        <Text style={WebviewOverlayStyles.loadingTitle}>
          {title}
        </Text>
        <Animatable.View
          animation="rotate"
          easing="linear"
          iterationCount="infinite"
          style={WebviewOverlayStyles.animator}
          >
          {SpinnerIcon}
        </Animatable.View>
      </View>
    );
  }

  onWebviewLoad(type) {

    let oldState = this.state.loadedWebViews;
    oldState[type] = true;
    let newState = oldState;

    store.dispatch({
      type: 'SET_WEBVIEW_LOADING_STATUS',
      loadedWebViews: newState
    });

  }

  getBackNav() {

    let { hasBackNav, backNavText } = this.props;

    return hasBackNav ? (
      <TouchableOpacity
        onPress={() => this.goBack()}
        style={WebviewOverlayStyles.backNavWrapper}>
        <Text style={WebviewOverlayStyles.backNavIcon}>
          {BackIcon}
        </Text>
        <Text style={WebviewOverlayStyles.backNavText}>
          {backNavText}
        </Text>
      </TouchableOpacity>
    ) : null;

  }

  goBack() {
    this.refs.webview.goBack();
  }

  handleNavigationStateChange(navState) {
    // NOTE: Fix for Issue#87 Podacasts navigating to home page bug...
    if (navState.url === 'http://www.hipcast.com/index.htm') {
      goBack();
    } else {
      return;
    }
  }

  render() {

    let { title, uri, type } = this.props;
    let { loadedWebViews } = this.state;

    let loadingIndicator = this.getLoadingIndicator(title);
    let backNav = this.getBackNav();

    if (loadedWebViews[type] === true) {
      loadingIndicator = null;
    }

    return (
      <Animatable.View
        ref="wvwrapper"
        style={WebviewOverlayStyles.container}>
        {loadingIndicator}
        {backNav}
        <WebView
          ref="webview"
          style={[WebviewOverlayStyles.webView, this.props.webviewStyles]}
          source={{
            uri: uri,
          }}
          onLoad={() => {
            if (loadedWebViews[type] === false) {
                this.refs.wvwrapper.fadeIn(500);
            }
            this.onWebviewLoad(type);
          }}
          onNavigationStateChange={(navState) => this.handleNavigationStateChange(navState)}
          injectedJavaScript={this.props.injectedJSCode}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
        />
      </Animatable.View>
    );
  }

}

// reactMixin(Weblay.prototype, TimerMixin);

export default Weblay;
