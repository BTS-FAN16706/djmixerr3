import React, { Component } from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';



export default class DJButton extends Component {
    async playSound(url) {
        try {
            await Audio.setIsEnabledAsync(true)
            var playBackObject = await Audio.Sound.createAsync(
                { uri: url },
                { shouldPlay: true }
            )
        } catch (error) {
            console.log()
        }
    }
    render() {
        return (
            <TouchableOpacity
                style={[styles.soundButton, { backgroundColor: this.props.bgColor }]}
                onPress={this.playSound}>
                <Text styles={styles.soundButtonText}>{this.props.Text}</Text>

            </TouchableOpacity>




        );
    }
}


const styles = StyleSheet.create({
    soundButton: {
        width: 200,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    soundButtonText: {
        fontFamily: 'Trebuchet MS',
        fontSize: 20
    },
}
);