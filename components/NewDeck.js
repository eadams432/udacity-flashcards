import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { saveDeckTitle } from "../utils/helpers";

class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { deckName: "" };
  }

  handleOnPress = () => {
    const  { deckName } = this.state;
    saveDeckTitle(deckName)
    .catch(err=>{
        console.log('unable to add card!')
        console.log(err)
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textElement}>New Deck!</Text>
        <TextInput
          style={[styles.inputBox, styles.textElement]}
          value={this.state.deckName}
          onChangeText={(text) => this.setState({ deckName: text })}
          placeholder="Enter deck name"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleOnPress}>
          <Text>Add!</Text>
        </TouchableOpacity>
      </View>
    );
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

export default NewDeck;
