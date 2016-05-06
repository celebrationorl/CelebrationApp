# CelebrationApp

### App Starter Instructions
- open terminal > git clone '<repo-ssh-link>'
- cc into repo and do `npm install` in root
- run `npm start` in root after npm install is finished
- open up separate terminal window and run `react-native run-<platform-here>` (platform here should be 'ios' or 'android')

You will need iOS Simulator and XCode to run app.

---

#### Use of `react-native-tabs`
*this is an npm package and is required for use in this project*

`Use in app:`
- used to create bottom TabBar.js component
- to implement TabBar.js import it in whatever component you need it for `import TabBar from '../components/TabBar';`
- then you must pass it 2 props, `navigator` & `page`
- 1st. prop `navigator` is used to reference the `<Navigator />'s` ref and do a `.push({ name: tab.props.name })`
- 2nd. prop `page` is used to tell the tab bar what tab it is on and which one to apply the `selectedStyle` to
