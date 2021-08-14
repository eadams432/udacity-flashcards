import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class NewQuestion extends Component {
    state = {
        question: '',
        answer: ''
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>New Question</Text>
                <TextInput 
                    style={this.inputBox}
                    value={this.state.question}
                    onChange={text=>this.setState({'question': text})}/>
                <TextInput 
                    style={this.inputBox}
                    value={this.state.answer}
                    onChange={text=>this.setState({'answer': text})}/>
                <TouchableOpacity style={this.button}>
                    <Text>Add</Text>
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
      },
      inputBox :{
          height: 40,
          borderColor: 'blue',
          borderWidth: 1
      }
});

export default NewQuestion;