import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
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
      communityGroupsBtnStyle ={},
      sisterhoodBtnStyle = {},
      menBtnStyle = {},
      outreachMissionsBtnStyle = {},
      collegeBtnStyle = {};

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
    } else if (churchLifeAreaType === 'sisterhood') {
      sisterhoodBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'men') {
      menBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'outreachMissions') {
      outreachMissionsBtnStyle = {color: '#171717'}
    } else if (churchLifeAreaType === 'college') {
      collegeBtnStyle = {color: '#171717'}
    }

    return (
      <View style={ChurchLifeStyles.container}>
        <View style={ChurchLifeStyles.areasWrapper}>
          <View style={ChurchLifeStyles.row}>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('preschool')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, preschoolBtnStyle]}
                  >
                  PRESCHOOL NURSERY
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('kids')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, kidsBtnStyle]}
                  >
                  KIDS
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('superSquad')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, superSquadBtnStyle]}
                  >
                  SUPER SQUAD
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={ChurchLifeStyles.row}>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('fuse')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, fuseBtnStyle]}
                  >
                  FUSE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('men')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, menBtnStyle]}
                  >
                  MEN
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('college')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, collegeBtnStyle]}
                  >
                  COLLEGE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('communityGroups')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, communityGroupsBtnStyle]}
                  >
                  COMMUNITY GROUPS
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={ChurchLifeStyles.row}>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('fusejv')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, fusejvBtnStyle]}
                  >
                  FUSE JV
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('sisterhood')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, sisterhoodBtnStyle]}
                  >
                  SISTERHOOD
                </Text>
              </TouchableOpacity>
            </View>
            <View style={ChurchLifeStyles.area}>
              <TouchableOpacity
                onPress={() => this.setChurchLifeArea('outreachMissions')}
                >
                <Text
                  style={[ChurchLifeStyles.areaTitleText, outreachMissionsBtnStyle]}
                  >
                  OUTREACH/MISSIONS
                </Text>
              </TouchableOpacity>
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
