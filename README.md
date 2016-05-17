# CelebrationApp

### App Starter Instructions
- open terminal > git clone '<repo-ssh-link>'
- cc into repo and do `npm install` in root
- run `npm start` in root after npm install is finished
- open up separate terminal window and run `react-native run-<platform-here>` (platform here should be 'ios' or 'android')

You will need iOS Simulator and XCode to run app.

---

#### Use of <a href="https://github.com/aksonov/react-native-tabs">react-native-tabs</a>
*this is an npm package and is required for use in this project*

**Use in app:**
- used to create bottom TabBar.js component
- to implement TabBar.js import it in whatever component you need it for `import TabBar from '../components/TabBar';`
- then you must pass it 2 props, `navigator` & `page`
- 1st. prop `navigator` is used to reference the `<Navigator />'s` ref and do a `.replace({ name: tab.props.name })`
- 2nd. prop `page` is used to tell the tab bar what tab it is on and which one to apply the `selectedStyle` to


#### Use of <a href="https://github.com/oblador/react-native-vector-icons">react-native-vector-icons</a>
*this is an npm package and is required for use in this project, if you are using icons. NOTE: this package needs additional setup within Xcode and Android projects to work, see `Installation` section in package docs.*

**Use in app:**
- used for all icons in app
- for use in app see code snippet below or see the github page for `react-native-vector-icons`

```
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
