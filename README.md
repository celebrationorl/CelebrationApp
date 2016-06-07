# CelebrationApp

### App Starter Instructions
- open terminal > git clone '<repo-ssh-link>'
- cc into repo and do `npm install` in root
- run `npm start` in root after npm install is finished
- open up separate terminal window and run `react-native run-<platform-here>` (platform here should be 'ios' or 'android')

You will need iOS Simulator and XCode to run app and for Android you will need a device or emulator (https://www.genymotion.com/)

### Technical Preferences
- avoid making seperations between ios and android in code

---

#### Use of <a href="https://github.com/exponentjs/react-native-tab-navigator">react-native-tab-navigator</a>
*this is an npm package and is required for use in this project. <b>Note this is used in conjunction with `react-native-vector-icons` to have icons over tab titles.</b>*

**Use in app:**
```
import Scene from '../scenes/scene';
import TabBarStyles from '../styles/tabBarStyles';
import Icon from 'react-native-vector-icons/<icon-library-name>'; // Example for icon library name can be: Ionicons, FontAwesome etc... (see `react-native-vector-icons` for supported icon libraries)

const iconSizes = 24,
  iconColor = '#171717';

const PageNameIconOutline = (<Icon name="ios-mic-outline" size={iconSizes} color={iconColor} />)
      PageNameIcon = (<Icon name="ios-mic" size={iconSizes} color={iconColor} />),

render() {
    return (
        <TabNavigator tabBarStyle={TabBarStyles.tabNavigator}>
            <TabNavigator.Item
              selected={this.state.selectedTab === '<page-name>'}
              titleStyle={TabBarStyles.title}
              selectedTitleStyle={TabBarStyles.titleSelected}
              title="<page-name>"
              renderIcon={() => PageNameIconOutline}
              renderSelectedIcon={() => PageNameIcon}
              onPress={() => this.setState({ selectedTab: '<page-name>' })}>
              <Scene />
            </TabNavigator.Item>
        </TabNavigator>
    );
}
```

For more usage examples and official docs see packages <a href="https://github.com/exponentjs/react-native-tab-navigator">Github Page (react-native-tab-navigator)</a>


#### Use of <a href="https://github.com/oblador/react-native-vector-icons">react-native-vector-icons</a>
*this is an npm package and is required for use in this project, if you are using icons. NOTE: this package needs additional setup within Xcode and Android projects to work, see `Installation` section in package docs.*

**Use in app:**
- used for all icons in app
- for use in app see code snippet below or see the github page for `react-native-vector-icons`

```
import Icon from 'react-native-vector-icons/<icon-library>'; (icon library example: Ionicons, FontAwesome etc...)
const VisitIcon = (<Icon name="map-marker" size={20} color="black" />)

render() {
    return (
      <View>
        <Text>Icons!</Text>
        {VisitIcon}
      </View>  
    );
  }
```

#### Use of <a href="https://github.com/oblador/react-native-animatable">react-native-animatable</a>
*this is an npm package and is required for use in this project, if you are using `<Weblay />` component (webview with loading indicator).*

**Use in app:**
- used for all and any animations in app
- used for webview loading indicator in `<Weblay />` component

```
import * as Animatable from 'react-native-animatable';

render() {
    return (
      <View>
        {/* Animatable.<type> (type examples: View, Image, Text) */}
        <Animatable.View
          animation="rotate"
          easing="linear"
          iterationCount="infinite"
          style={WebviewOverlayStyles.animator}
          >
          {<animated-element>}
        </Animatable.View>
      </View>  
    );
  }
```
