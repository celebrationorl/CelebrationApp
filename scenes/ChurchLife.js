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

    let churchLifeAreaType = this.getChurchLifeAreaType();

    let preschoolBtnStyle = {},
      kidsBtnStyle = {},
      superSquadBtnStyle = {},
      fusejvBtnStyle = {},
      fuseBtnStyle = {},
      communityGroupsBtnStyle ={};

    if (churchLifeAreaType === 'preschool') {
      preschoolBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'kids') {
      kidsBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'superSquad') {
      superSquadBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'fusejv') {
      fusejvBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'fuse') {
      fuseBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'communityGroups') {
      communityGroupsBtnStyle = {color: '#171717'}
    }

    return (
      <View style={ChurchLifeStyles.container}>
        <View style={ChurchLifeStyles.areasWrapper}>
          <View style={ChurchLifeStyles.row}>
            <View style={ChurchLifeStyles.area}>
              <TouchableHighlight
                onPress={() => this.setChurchLifeArea('preschool')}
                >
                <Text style={[ChurchLifeStyles.areaTitleText, preschoolBtnStyle]}>Preschool Nursery</Text>
              </TouchableHighlight>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableHighlight
                onPress={() => this.setChurchLifeArea('kids')}
                >
                <Text style={[ChurchLifeStyles.areaTitleText, kidsBtnStyle]}>Kids</Text>
              </TouchableHighlight>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableHighlight
                onPress={() => this.setChurchLifeArea('superSquad')}
                >
                <Text style={[ChurchLifeStyles.areaTitleText, superSquadBtnStyle]}>Super Squad</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={ChurchLifeStyles.row}>
            <View style={ChurchLifeStyles.area}>
              <TouchableHighlight
                onPress={() => this.setChurchLifeArea('fusejv')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, fusejvBtnStyle]}
                  >
                  Fuse JV
                </Text>
              </TouchableHighlight>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableHighlight
                onPress={() => this.setChurchLifeArea('fuse')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, fuseBtnStyle]}
                  >
                  Fuse
                </Text>
              </TouchableHighlight>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableHighlight
                onPress={() => this.setChurchLifeArea('communityGroups')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, communityGroupsBtnStyle]}
                  >
                  Community Groups
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={ChurchLifeStyles.scrollView}
          >
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
