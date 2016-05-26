import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native';

import ChurchLifeStyles from '../styles/churchLifeStyles';

class ChurchLifeArea extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    churchLifeAreaType: React.PropTypes.string
  }

  render() {

    let { churchLifeAreaType } = this.props;

    let areaContent = null;

    if (churchLifeAreaType === 'preschool') {
      areaContent = (
        <Text style={ChurchLifeStyles.areaText}>
          preschool
        </Text>
      );
    } else if (churchLifeAreaType === 'kids') {
      areaContent = (
        <Text style={ChurchLifeStyles.areaText}>
          kids
        </Text>
      );
    }

    return (
      <View>
        {/*}<Image
          style={churchLifeStyles.bgImage}
          source={require('../assets/img/celebration_imgbar_bg_1.png')}
        />*/}
        <View>
          {areaContent}
        </View>
      </View>
    );
  }

}

export default ChurchLifeArea;
