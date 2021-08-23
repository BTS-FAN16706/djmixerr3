import React, { Component } from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import DJButton from './djbutton';



export default class App extends Component {

  render() {
    return (
      <View>
        <View style={styles.MusicButtoncontainer}>
          <DjButton
            uri="http://www.rickshriver.net/sounds/Bamboo%20Flute/bamboo%20flute%20800hz.wav"
            text="Press Me"
            bgColor="blue" />
        </View>

        <View style={styles.MusicButtoncontainer}>
          <DjButton
            uri="http://www.phatdrumloops.com/audio/wav/footsteps.wav"
            text="Press Me"
            bgColor="red" />
        </View>

        <View style={styles.MusicButtoncontainer}>
          <DjButton
            uri="http://www.playinmusic.com/Samples/Dean%20Slap%20Best/BassAmbSlap%20122%208c.mp3"
            text="Press Me"
            bgColor="green" />
        </View>

        <View style={styles.MusicButtoncontainer}>
          <DjButton
            uri="http://www.conceptapprovals.com/NHPO-Graphics/Instruments/CLARINET.WAV"
            text="Press Me"
            bgColor="pink" />
        </View>

        <View style={styles.MusicButtoncontainer}>
          <DjButton
            uri="http://www.ringelkater.de/Sounds/2geraeusche_gegenst/HARFE.WAV"
            text="Press Me"
            bgColor="yellow" />
        </View>

        <View style={styles.stopButtonContainer}>
          <TouchableOpacity style={styles.stopButton} onPress={() => {
            Audio.setIsEnabledAsnyc(false)
          }}>
            <Text> Stop sound</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  stopButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  musicButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButton: {
    width: '80%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
  }
});