//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//components
import PlayerModal from '../modals/player_modal';
import ResultForm from './result_form';
import { requestSelectedBracket } from '../../actions/bracket_actions';

export default class BracketDetail extends Component {
  constructor(props) {
    super(props);

    this.getBracket = this.getBracket.bind(this);
    this.onLearnMore = this.onLearnMore.bind(this);
    this.onEditPress = this.onEditPress.bind(this);
  }

  // componentWillMount(){
  //   console.log(this.props);
  //   this.props.requestSelectedBracket(this.props.navigation.state.params.bracket._id);
  // }

  onLearnMore() {
    this.props.navigation.navigate('PlayerModal');
  }

  onEditPress(match) {
    this.props.navigation.navigate('ResultForm', { match });
  }

  getBracket() {
    this.props.receiveBracket();
  }

  ShowEditButton(match) {
    if (this.props.currentUserId === this.props.selectedBracket.tournamentOrganizerId) {
      return (
        <TouchableOpacity style={styles.editButton} onPress={() => this.onEditPress(match)}>
          <Icon name="pencil" size={25} color={'yellow'} />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.editButton}></View>
      );
    }
  }

  render() {
    const { selectedBracket, currentUserId } = this.props;

      return (
        <View style={styles.container}>

          <View>
            <Text style={styles.header}>{selectedBracket.title}</Text>
          </View>
          <Swiper style={styles.wrapper} height={500} horizontal={true}>
  {/*Round 1*/}
            <View style={styles.slide1}>
                <View>
                  <Text style={styles.round}>Round 1</Text>
        {/*Match 1*/}
                  <View style={styles.match}>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 1 profile pic */}
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.matchup}>
                        {selectedBracket.matches[0].pairing.player1} vs {selectedBracket.matches[0].pairing.player2}
                      </Text>
                      <Text style={styles.resultText}>
                        {selectedBracket.matches[0].result.player1Score} - {selectedBracket.matches[0].result.player2Score}
                      </Text>
                      {this.ShowEditButton(0)}
                    </View>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 2 profile pic */}
                    </TouchableOpacity>
                  </View>
        {/*Match 2*/}
                  <View style={styles.match}>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 1 profile pic */}
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.matchup}>
                        {selectedBracket.matches[1].pairing.player1} vs {selectedBracket.matches[1].pairing.player2}
                      </Text>
                      <Text style={styles.resultText}>
                        {selectedBracket.matches[1].result.player1Score} - {selectedBracket.matches[1].result.player2Score}
                      </Text>
                      {this.ShowEditButton(1)}
                    </View>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 2 profile pic */}
                    </TouchableOpacity>
                  </View>
        {/*Match 3*/}
                  <View style={styles.match}>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 1 profile pic */}
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.matchup}>
                        {selectedBracket.matches[2].pairing.player1} vs {selectedBracket.matches[2].pairing.player2}
                      </Text>
                      <Text style={styles.resultText}>
                        {selectedBracket.matches[2].result.player1Score} - {selectedBracket.matches[2].result.player2Score}
                      </Text>
                      {this.ShowEditButton(2)}
                    </View>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 2 profile pic */}
                    </TouchableOpacity>
                  </View>
        {/*Match 4*/}
                  <View style={styles.match}>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 1 profile pic */}
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.matchup}>
                        {selectedBracket.matches[3].pairing.player1} vs {selectedBracket.matches[3].pairing.player2}
                      </Text>
                      <Text style={styles.resultText}>
                        {selectedBracket.matches[3].result.player1Score} - {selectedBracket.matches[3].result.player2Score}
                      </Text>
                      {this.ShowEditButton(3)}
                    </View>
                    <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                      {/* player 2 profile pic */}
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
  {/*Round 2*/}
            <View style={styles.slide2}>
              <View>
                <Text style={styles.round}>Round 2</Text>
        {/*Match 5*/}
                <View style={styles.match}>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 1 profile pic */}
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.matchup}>
                      pending vs pending
                    </Text>
                    <Text style={styles.resultText}>0 - 0</Text>
                    {this.ShowEditButton(4)}
                  </View>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 2 profile pic */}
                  </TouchableOpacity>
                </View>
        {/*Match 6*/}
                <View style={styles.match}>

                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 1 profile pic */}
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.matchup}>
                      pending vs pending
                    </Text>
                    <Text style={styles.resultText}>0 - 0</Text>
                    {this.ShowEditButton(5)}
                  </View>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 2 profile pic */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
  {/*Round 3*/}
            <View style={styles.slide3}>
              <Text style={styles.round}>Round 3</Text>
              <View>
                <View style={styles.match}>
      {/*Match 7*/}
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 1 profile pic */}
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.matchup}>
                      pending vs pending
                    </Text>
                    <Text style={styles.resultText}>0 - 0</Text>
                    {this.ShowEditButton(6)}
                  </View>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 2 profile pic */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Swiper>
        </View>
      );
  }//render
}//Bracket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 25,
    backgroundColor: '#333',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#000',

  },
  editButton: {
    position: 'absolute',
    top: -30,
    right: 105,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
  },
  wrapper: {
  },
  slide: {
    flex: 9,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  slide1: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  slide2: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  body: {
    alignSelf: 'stretch',
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  round: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 15,
    paddingTop: 25,
    textAlign: 'center',
    color: 'white',
  },
  match: {
    backgroundColor: '#333',
    height: 70,
    width: 330,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: .3,
    borderColor: 'yellow',
  },
  matchup: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    width: 230,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  resultText: {
    color: 'yellow',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  playerPicture: {
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#929287',
  }
});

const mapStatetoProps = (state) => {
  return {
    selectedBracket: state.bracket.selectedBracket,
    currentUserId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestSelectedBracket: (id) => dispatch(requestSelectedBracket(id))
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(BracketDetail);
