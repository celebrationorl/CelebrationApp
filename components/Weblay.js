import React, {
  Component,
  View,
  Text,
  WebView
} from 'react-native';

import WebviewOverlayStyles from '../styles/webviewOverlayStyles';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/EvilIcons';
import store from '../redux/appStore';

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
    type: React.PropTypes.string
  }

  getLoadingIndicator(title) {
    return (
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

  render() {

    let { title, uri, type } = this.props;
    let { loadedWebViews } = this.state;

    let loadingIndicator = this.getLoadingIndicator(title);

    if (loadedWebViews[type] === true) loadingIndicator = null;

    return (
      <View style={WebviewOverlayStyles.container}>
        {loadingIndicator}
        <WebView
          style={WebviewOverlayStyles.webView}
          source={{
            uri: uri,
          }}
          onLoad={() => this.onWebviewLoad(type)}
          injectedJavaScript={this.props.injectedJSCode}
          javaScriptEnabledAndroid={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }

}

export default Weblay;
