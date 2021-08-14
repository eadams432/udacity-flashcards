import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class NewDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>New Deck!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>Add!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#5d8aa8"
    }
});

export default NewDeck;