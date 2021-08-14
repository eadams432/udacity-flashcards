import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Quiz extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Quiz</Text>
                
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

export default Quiz;