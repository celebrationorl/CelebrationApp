import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import ChurchLifeStyles from '../styles/churchLifeStyles';
import ChurchLifeArea from '../components/ChurchLifeArea';

import store from '../redux/appStore';

class ChurchLife extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  setChurchLifeArea(areaType) {
    store.dispatch({
      type: 'SET_CHURCH_LIFE_AREA',
      churchLifeAreaType: areaType
    })
  }

  getChurchLifeAreaType() {
    var { churchLifeAreaType } = this.state;
    return churchLifeAreaType;
  }

  render() {

    return (
      <View style={ChurchLifeStyles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={ChurchLifeStyles.scrollView}
          >
          <View style={ChurchLifeStyles.areasWrapper}>

            <View style={ChurchLifeStyles.row}>
              <View style={ChurchLifeStyles.area}>
                <TouchableHighlight
                  onPress={() => this.setChurchLifeArea('preschool')}
                  >
                  <Text style={ChurchLifeStyles.areaText}>Preschool Nursery</Text>
                </TouchableHighlight>
              </View>
              <View style={ChurchLifeStyles.area}>
                <TouchableHighlight
                  onPress={() => this.setChurchLifeArea('kids')}
                  >
                  <Text style={ChurchLifeStyles.areaText}>Kids</Text>
                </TouchableHighlight>
              </View>
            </View>

          </View>

          <ChurchLifeArea churchLifeAreaType={this.getChurchLifeAreaType()} />

        </ScrollView>
      </View>
    );
  }
}

export default ChurchLife;









/*
<View style={ChurchLifeStyles.areasWrapper}>

  <View style={ChurchLifeStyles.row}>
    <View style={ChurchLifeStyles.area}>
      <Image
        style={ChurchLifeStyles.areaImage}
        source={require('../assets/img/church_life_areas/preschool.png')}
        >
        <View style={ChurchLifeStyles.areaImageTextWrapper}>
          <Text style={ChurchLifeStyles.areaImageText}>Preschool Nursery</Text>
        </View>
      </Image>
    </View>

    <View style={ChurchLifeStyles.area}>
      <Image
        style={ChurchLifeStyles.areaImage}
        source={require('../assets/img/church_life_areas/kids.png')}
      >
        <View style={ChurchLifeStyles.areaImageTextWrapper}>
          <Text style={ChurchLifeStyles.areaImageText}>Kids</Text>
        </View>
      </Image>
    </View>
  </View>

</View>
*/
