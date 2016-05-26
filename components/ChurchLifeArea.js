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
        <View>
          <View style={ChurchLifeStyles.graphicWrapper}>
            <Image
              style={ChurchLifeStyles.graphic}
              source={require('../assets/img/church_life_areas/preschool_graphic.png')}
            />
          </View>
          <View style={ChurchLifeStyles.body}>
            <View style={ChurchLifeStyles.primaryTextWrapper}>
              <Text style={ChurchLifeStyles.primaryText}>
                Preschool/Nursery
              </Text>
            </View>
            <Text style={ChurchLifeStyles.secondaryText}>
              Our nursery and preschool ministries serve to
              care for your infants and toddlers in a safe and
              nurturing environment. Our nursery is arranged
              according to developmental stages rather than age
              groups, with each environment designed to meet your
              child’s needs. Our preschool rooms are fun and exciting
              atmospheres where your kids will learn, create and
              worship together! Nursery and preschool ministries
              are available at all services every Sunday.
            </Text>
          </View>
        </View>
      );
    } else if (churchLifeAreaType === 'kids') {
      areaContent = (
        <View>
          <View style={ChurchLifeStyles.graphicWrapper}>
            <Image
              style={ChurchLifeStyles.graphic}
              source={require('../assets/img/church_life_areas/kids_graphic.png')}
            />
          </View>
          <View style={ChurchLifeStyles.body}>
            <View style={ChurchLifeStyles.primaryTextWrapper}>
              <Text style={ChurchLifeStyles.primaryText}>
                Kids
              </Text>
            </View>
            <Text style={ChurchLifeStyles.secondaryText}>
              Our Celebration Kids ministry is for K-4th grade
              students. During our weekend services, kids get to
              experience their very own service with worship, a
              message and breakout groups in a safe, friendly and
              enjoyable atmosphere. Our leaders serve to ensure your
              kids encounter God, have fun and feel loved. The safety
              and security of your children are our top priority.
              Our check-in and pick-up process is simple yet efficient.
              Our goal is for you to enjoy service knowing your kids
              are secure and having a great time.
            </Text>
          </View>
        </View>
      );
    } else if (churchLifeAreaType === 'superSquad') {
      areaContent = (
        <View>
          <View style={ChurchLifeStyles.graphicWrapper}>
            <Image
              style={[ChurchLifeStyles.graphic, {height: 200}]}
              source={require('../assets/img/church_life_areas/super_squad_graphic.png')}
            />
          </View>
          <View style={ChurchLifeStyles.body}>
            <View style={ChurchLifeStyles.primaryTextWrapper}>
              <Text style={ChurchLifeStyles.primaryText}>
                Super Squad
              </Text>
            </View>
            <Text style={ChurchLifeStyles.secondaryText}>
              Super Squad is our inclusion ministry for children
              with special needs. Kids with special needs overcome
              obstacles daily and that makes them super heroes in
              our book! Our Super Squad team is here to come along
              side and support your child by providing a “Side Kick”,
              or volunteer buddy, to join them throughout the entire
              service. Your child’s Side Kick will help ensure their
              experience is enjoyable by helping them engage in the
              service elements, manage transitions and overcome any
              challenges to enjoying our kids ministry services.
            </Text>
          </View>
        </View>
      );
    } else if (churchLifeAreaType === 'fusejv') {
      areaContent = (
        <Text style={ChurchLifeStyles.areaText}>
          fuse jv
        </Text>
      );
    } else if (churchLifeAreaType === 'fuse') {
      areaContent = (
        <Text style={ChurchLifeStyles.areaText}>
          fuse
        </Text>
      );
    } else if (churchLifeAreaType === 'communityGroups') {
      areaContent = (
        <Text style={ChurchLifeStyles.areaBodyTitle}>
          community groups
        </Text>
      );
    }

    return (
      <View>
        <View>
          {areaContent}
        </View>
      </View>
    );
  }

}

export default ChurchLifeArea;
