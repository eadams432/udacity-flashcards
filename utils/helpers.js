import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@flashcards_key'

const storeData = async (deck) => {
  const tmp = {
    [deck.title]: {
      title: deck.title,
      quesitons: [{question: deck.question, answer: deck.asnwer}]
    }
  }
    try {
      const jsonValue = JSON.stringify(tmp);
      console.log(jsonValue);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (e) {
      // saving error
    }
}

const saveDeckTitle = async (title) => {
    const tmp = {
      [deck.title]: {
        'title': title
      }      
    }
    try {
        const jsonValue = JSON.stringify(tmp);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      } catch (e) {
        alert(e);
      }
}

const addCardToDeck = async (deckTitle, card) => {
    const tmp = {
      [deckTitle]: {
        quesitons: [{question: card.question, answer: card.asnwer}]
      }
    }
    try {
        await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(tmp));
      } catch (e) {
        alert(e);
      }
}