import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@flashcards_key'

// const storeData = async (deck) => {
//   const tmp = {
//     [deck.title]: {
//       title: deck.title,
//       quesitons: [{question: deck.question, answer: deck.asnwer}]
//     }
//   }
//     try {
//       const jsonValue = JSON.stringify(tmp);
//       console.log(jsonValue);
//       await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
//     } catch (e) {
//       // saving error
//     }
// }

export const saveDeckTitle = async (title) => {
    const tmp = {
      [title]:{
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

export const addCardToDeck = async (deckTitle, card) => {
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

export const getDecks = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    if(value !== null) {
      return value;
    }
  } catch(e) {
    console.log('Error!');
    console.log(e);
  }
}

export const getDeck = () => {

}