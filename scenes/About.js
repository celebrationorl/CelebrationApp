import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import AboutStyles from '../styles/aboutStyles';

class About extends Component {

  constructor(props, context) {
    super(props, context);
  }

  propTypes: {
    payload: React.PropTypes.object.isRequired
  }

  render() {

    var { payload } = this.props;

    return (
      <View style={AboutStyles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={AboutStyles.scrollView}
          >

          <View style={AboutStyles.logoWrapper}>
            <Image
              style={AboutStyles.logo}
              source={require('../assets/img/celebration_logo.png')}
            />
          </View>

          <Text style={AboutStyles.title}>
            {payload.title}
          </Text>

          <View style={AboutStyles.body}>
            <View style={AboutStyles.primaryTextWrapper}>
              <Text style={AboutStyles.primaryText}>
                MISSION
              </Text>
            </View>
            <Text style={AboutStyles.secondaryText}>
              {payload.body}
            </Text>
          </View>

          <View style={AboutStyles.body}>
            <View style={AboutStyles.primaryTextWrapper}>
              <Text style={AboutStyles.primaryText}>
                WE'D LOVE TO HAVE YOU WORSHIP WITH US THIS SUNDAY!
              </Text>
            </View>
            <Text style={AboutStyles.secondaryText}>
              It is our prayer that from the moment you walk through the
              doors you will feel an overwhelming sense of HOME. Whether
              you are visiting for the first time or a regular attendee at
              Celebration Church, we consider it an honor to have you with us.
              We hope your experience at Celebration inspires you to
              passionately pursue Christ, and discover your part in our story
               as well. Join us this Sunday as we celebrate all that Jesus is!
            </Text>
          </View>

          <View style={AboutStyles.body}>
            <View style={AboutStyles.primaryTextWrapper}>
              <Text style={AboutStyles.primaryText}>
                TIMES AND LOCATION
              </Text>
            </View>

            <Text style={AboutStyles.subPrimaryText}>
              Times
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              Sundays 10 AM, 12 PM & 6 PM
            </Text>

            <Text style={AboutStyles.subPrimaryText}>
              Location
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              800 E. ROBINSON STREET, ORLANDO, FL 32801 (HOWARD MIDDLE SCHOOL)
            </Text>

          </View>

          <View style={AboutStyles.body}>
            <View style={AboutStyles.primaryTextWrapper}>
              <Text style={AboutStyles.primaryText}>
                WHAT WE BELIEVE
              </Text>
            </View>
            <Text style={AboutStyles.subPrimaryText}>
              The Bible
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              We believe that the Bible is God’s Word. It is accurate,
              authoritative and applicable to our everyday lives.
              2 Timothy 3:15-16
            </Text>

            <Text style={AboutStyles.subPrimaryText}>
              God
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              We believe in one eternal God who is the Creator of all things.
              He exists in three Persons: God the Father, God the Son and God
              the Holy Spirit. He is totally loving and completely holy.
              Matthew 3:16-17 ; 28:19; 1 John 5:7-8; Isaiah 9:6
            </Text>

            <Text style={AboutStyles.subPrimaryText}>
              Salvation
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              We believe that sin has separated each of us from God and His
              purpose for our lives. We believe that in order to receive
              forgiveness and the ‘new birth’ we must repent of our sins,
              believe in the Lord Jesus Christ, and submit to His will for our lives.
              John 14:6; Colossians 1:13-18; Romans 5:1; Ephesians 2:8-9;
              2 Peter 3:9; 1 Timothy 2:3-4
            </Text>

            <Text style={AboutStyles.subPrimaryText}>
              Jesus Christ
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              We believe that the Lord Jesus Christ as both God and man is the
              only One who can reconcile us to God. He lived a sinless and
              exemplary life, died on the cross in our place, and rose again
              to prove His victory and empower us for life. We believe that
              the Lord Jesus Christ is coming back again as He promised. John
              1:1-4; 1 Timothy 3:16; Matthew 1:18; 2 Corinthians 5:21; Mark
              16:5-6; Acts 1:9-11; John 14:3.
            </Text>

            <Text style={AboutStyles.subPrimaryText}>
              The Holy Spirit
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              We believe that the Holy Spirit empowers us to live the holy and
              fruitful lives that God intends for us to live and that through
              the Holy Spirit we have access to spiritual gifts for the purpose
              of building and edifying the local church. 2 Peter 1:2-3; 2
              Corinthians 3:18; Acts 8:14-17; Acts 10:44-48; Romans 11:29.
            </Text>

            <Text style={AboutStyles.subPrimaryText}>
              The Local Church
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              We believe in the power and significance of the Church and the
              necessity of believers to meet regularly together for fellowship,
              prayer and the ‘breaking of bread’. We believe that God has
              individually equipped us so that we can successfully achieve His
              purpose for our lives which is to worship God, fulfill our role
              in the Church and serve the community in which we live. We
              believe that God wants to heal and transform us so that we can
              live healthy and blessed lives in order to help others more
              effectively. Ephesians 1:22, 2:19-22
            </Text>

            <Text style={AboutStyles.subPrimaryText}>
              Heaven and Hell
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              We believe that Heaven and Hell are real eternal places and that
              our eternal destination is determined by our response to
              the Lord Jesus Christ.
            </Text>
            <Text style={[AboutStyles.secondaryText, {alignSelf: 'flex-start'}]}>
              Revelation 20:11-15; John 14:1-4; Romans 6:23; John 3:15-16
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default About;
