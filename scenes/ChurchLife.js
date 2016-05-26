import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import ChurchLifeStyles from '../styles/churchLifeStyles';

class ChurchLife extends Component {

  constructor(props, context) {
    super(props, context);
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
        </ScrollView>
      </View>
    );
  }
}

export default ChurchLife;
