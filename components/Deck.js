import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Deck extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Deck Name</Text>
                <Text>Card Count</Text>
                <TouchableOpacity>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Take Quiz!</Text>
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

export default Deck;