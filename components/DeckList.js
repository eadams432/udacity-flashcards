import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class DeckList extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>testing!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>Press Me!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    button: {
      alignItems: "center",
      backgroundColor: "#5d8aa8",
      padding: 10
    }
});

export default DeckList;