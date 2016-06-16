import React, { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import { black } from './colorStyles';

const WebViewOverlayStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: height
  },

  backNavWrapper: {
    marginTop: 5,
    paddingRight: 20,
    paddingLeft: 15,
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: width
  },

  backNavIcon: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: black
  },

  backNavText: {
    bottom: 10,
    left: 50,
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '600',
    position: 'absolute',
    backgroundColor: 'transparent',
    color: black
  },

  loadingTitle: {
    marginBottom: 20,
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
    color: black
  },

  webviewOverlay: {
    paddingTop: 200,
    paddingBottom: 350,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  webviewOverlayPresentation: {
    paddingTop: 30,
    paddingBottom: 350,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  animator: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  webView: {
    height: height,
    width: width
  }

});

export default WebViewOverlayStyles;
