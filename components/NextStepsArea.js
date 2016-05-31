import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native';

import NextStepsStyles from '../styles/nextStepsStyles';

class NextStepsArea extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    nextStepsAreaType: React.PropTypes.string
  }

  render() {

    let { nextStepsAreaType } = this.props;

    let areaContent = null;

    if (nextStepsAreaType === 'communityGroups') {
      areaContent = (
        <View>
          <View style={NextStepsStyles.body}>
            <View style={NextStepsStyles.primaryTextWrapper}>
              <Text style={NextStepsStyles.primaryText}>
                COMMUNITY GROUPS
              </Text>
            </View>
            <Text style={NextStepsStyles.secondaryText}>
              Community groups are the heartbeat of our church.
              Every week, in homes all across the city, groups get
              together to hang out, have dinner and just do life
              together! It’s a place to meet and connect with friends
              as well as learn and share your experiences in your walk
              with God. If you would like to be a part of a group,
              visit our Next Steps area in the foyer before or after
              any of our Sunday services. Please feel free to visit
              several community groups before choosing one that best
              fits you!
            </Text>
            <Text style={NextStepsStyles.secondaryText}>
              For more information or to get plugged into a
              group email: groups@celebrationorl.org
            </Text>
          </View>
        </View>
      );
    } else if (nextStepsAreaType === 'godLife') {
      areaContent = (
        <View>
          <View style={NextStepsStyles.body}>
            <View style={NextStepsStyles.primaryTextWrapper}>
              <Text style={NextStepsStyles.primaryText}>
                GOD-FIRST LIFE/VOLUNTEER
              </Text>
            </View>
            <Text style={NextStepsStyles.secondaryText}>
              A great way to build friendships in church is to
              join a volunteer team! You can serve along side others
              who also desire to see the church grow and develop into
              a place that reflects God’s character, creativity and love.
              If you are interested in joining a volunteer team, we would
              love to help you find the best fit and get involved. Talk
              to a team member or fill out a card found in the sermon note
              packet during our Sunday services.
            </Text>
            <Text style={NextStepsStyles.secondaryText}>
              For more information email: volunteer@celebrationorl.org
            </Text>
          </View>
        </View>
      );
    } else if (nextStepsAreaType === 'baptisms') {
      areaContent = (
        <View>
          <View style={NextStepsStyles.body}>
            <View style={NextStepsStyles.primaryTextWrapper}>
              <Text style={NextStepsStyles.primaryText}>
                WATER BAPTISMS
              </Text>
            </View>
            <Text style={NextStepsStyles.secondaryText}>
              Getting water baptised is you outwardly expressing
              what's happened on the inside.
              According to the Bible, the symbolism of baptism declares
              that three things happen to believers who are baptized:
            </Text>
            <Text style={NextStepsStyles.secondaryText}>
              1. they die with Christ to their old self;
            </Text>
            <Text style={NextStepsStyles.secondaryText}>
              2. they rise with Christ to become a new creature; and
            </Text>
            <Text style={NextStepsStyles.secondaryText}>
              3. they are incorporated in their new life with a living
              community which looks for the coming of the Lord (Romans 6:1-11).
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View>
        {areaContent}
      </View>
    );
  }

}

export default NextStepsArea;
