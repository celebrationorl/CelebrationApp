import React, {
  Component,
  View,
  Image,
  Text,
  WebView
} from 'react-native';

var injectedMissionsWebViewJSCode = `

  var heroImg = document.getElementsByClassName("vc_row wpb_row vc_row-fluid background-static");
  var nav = document.getElementsByClassName("wpb_text_column wpb_content_element  fixed-menu");

  var footer = document.getElementById("footer-callout-wrap");
  var copyright = document.getElementById("footer-bottom");

  footer.style.display = "none";
  copyright.style.display = "none";
  heroImg[0].style.display = "none";
  nav[0].style.display = "none";

  document.querySelector(".wpb_text_column.wpb_content_element.newtitle").style.display = 'none';
  document.querySelector(".center-row-inner.clr").style.marginTop = '-50px';

`;

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
                PRESCHOOL/NURSERY
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
                KIDS
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
                SUPER SQUAD
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
        <View style={ChurchLifeStyles.body}>
          <View style={ChurchLifeStyles.primaryTextWrapper}>
            <Text style={ChurchLifeStyles.primaryText}>
              FUSE JV
            </Text>
          </View>
          <Text style={ChurchLifeStyles.secondaryText}>
            Fuse JV is for grades 5th-7th and meets separately
            every Sunday during church for their own awesome service!
            Check in with our team to learn more about Fuse JV services,
            community groups and events like lunch and random fun in the
            park after church!
          </Text>
          <Text style={ChurchLifeStyles.secondaryText}>
            For more info contact: jdelacruz@celebrationorl.org
          </Text>
        </View>
      );
    } else if (churchLifeAreaType === 'fuse') {
      areaContent = (
        <View style={ChurchLifeStyles.body}>
          <View style={ChurchLifeStyles.primaryTextWrapper}>
            <Text style={ChurchLifeStyles.primaryText}>
              FUSE
            </Text>
          </View>
          <Text style={ChurchLifeStyles.secondaryText}>
            Fuse is our youth ministry for grades 8th-12th.
            We meet together every month for fun and relevant
            services designed specifically for teens and have
            community groups running throughout the city each
            week. Invite your friends and come hang out!
          </Text>
          <Text style={ChurchLifeStyles.secondaryText}>
            For more info contact: jdelacruz@celebrationorl.org
          </Text>
        </View>
      );
    } else if (churchLifeAreaType === 'communityGroups') {
      areaContent = (
        <View style={ChurchLifeStyles.body}>
          <View style={ChurchLifeStyles.primaryTextWrapper}>
            <Text style={ChurchLifeStyles.primaryText}>
              COMMUNITY GROUPS
            </Text>
          </View>
          <Text style={ChurchLifeStyles.secondaryText}>
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
          <Text style={ChurchLifeStyles.secondaryText}>
            For more information or to get plugged into a group email: groups@celebrationorl.org
          </Text>
        </View>
      );
    } else if (churchLifeAreaType === 'sisterhood') {
      areaContent = (
        <View style={ChurchLifeStyles.body}>
          <View style={ChurchLifeStyles.primaryTextWrapper}>
            <Text style={ChurchLifeStyles.primaryText}>
              SISTERHOOD
            </Text>
          </View>
          <Text style={ChurchLifeStyles.secondaryText}>
            Sisterhood exists to place value on women at
            every stage of life and serves to help them
            reach their fullest potential. It is about
            the gathering of everyday women who desire
            to make their world a better place. We want
            to inspire women so that their contribution
            can, and will, make a difference.
          </Text>
        </View>
      );
    } else if (churchLifeAreaType === 'men') {
      areaContent = (
        <View style={ChurchLifeStyles.body}>
          <View style={ChurchLifeStyles.primaryTextWrapper}>
            <Text style={ChurchLifeStyles.primaryText}>
              MEN
            </Text>
          </View>
          <Text style={ChurchLifeStyles.secondaryText}>
            The goal of our men’s ministry is to equip men to
            be Christ-centered, Spirit-filled leaders who put
            God first in everything they do. Celebration Men
            provides a place for building community and strong
            relationships where men will develop a sense of
            purpose and a solid identity based on who God
            says they are.
          </Text>
        </View>
      );
    } else if (churchLifeAreaType === 'outreachMissions') {
      areaContent = (
        <View>
          <WebView
            style={ChurchLifeStyles.webView}
            source={{
              uri: "http://celebrationorl.org/outreach/",
            }}
            injectedJavaScript={injectedMissionsWebViewJSCode}
            javaScriptEnabledAndroid={true}
            scalesPageToFit={true}
          />
        </View>
      );
    } else if (churchLifeAreaType === 'college') {
      areaContent = (
        <View>
          <WebView
            style={ChurchLifeStyles.webView}
            source={{
              uri: "http://celebrationorl.org/college/",
            }}
            javaScriptEnabledAndroid={true}
            scalesPageToFit={true}
          />
        </View>
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


// Posssibly needed missions info
/*<View style={ChurchLifeStyles.primaryTextWrapper}>
  <Text style={ChurchLifeStyles.primaryText}>
    OUTREACH
  </Text>
</View>
<Text style={ChurchLifeStyles.secondaryText}>
  Through our local outreach initiatives, we partner
  with several organizations and ministries, working
  together to meet the practical and spiritual needs
  of the communities we serve. Our goal is to be the
  hands and feet of Jesus, driven by His heart to
  serve others, while giving people the opportunity to
  find true hope and fulfillment.
</Text>
<Text style={ChurchLifeStyles.secondaryText}>
  For more info please email: outreach@celebrationorl.org
</Text>

<View style={ChurchLifeStyles.primaryTextWrapper}>
  <Text style={ChurchLifeStyles.primaryText}>
    MISSIONS
  </Text>
</View>
<Text style={ChurchLifeStyles.secondaryText}>
  Celebration Church is a global, multi-site church
  with a mandate for Kingdom expansion. Our teams will
  travel to countries where they can meet the needs of the
  people as well as serve to strengthen the local church.
  Strengthening the local church is an important aspect of
  every mission’s team as it is the local church that will
  be ministering daily to their community once the short term
  mission’s team has departed.
</Text>
<Text style={ChurchLifeStyles.secondaryText}>
  Our teams do a variety of ministry, which could range
  from prayer walks, ministry to the poor, kids, youth,
  men’s, women’s, marrieds ministry, construction projects,
  medical outreaches, leadership development, ministry equipping,
  community outreaches and more.
</Text>
<Text style={ChurchLifeStyles.secondaryText}>
  If you would like information on upcoming missions trips please email: missions@celebrationorl.org
</Text>*/
