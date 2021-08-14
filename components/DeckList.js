import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getDecks } from '../utils/helpers';

class DeckList extends Component {

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.container}>
                <Text>testing!</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
      },
      button: {
        alignItems: "center",
        backgroundColor: "#5d8aa8",
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        borderRadius: 16,
      },
      inputBox: {
        height: 40,
        borderWidth: 1,
        margin: 20,
        padding: 10,
      },
      textElement: {
        height: 40,
        margin: 20,
        padding: 10,
      },
});

export default DeckList;