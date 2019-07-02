import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image, StyleSheet, Dimensions, Alert, FlatList, TouchableOpacity} from "react-native";

const AllCards = () => {

  const [cards, setCards] = useState([]);

  

  useEffect(() => {
    fetchCards().then(data => setCards(data))
    
  }, [])

  const fetchCards = () => {
    return fetch('https://thierry.sytes.net/schralebingo/api/cards')
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.error(err);
      })
  }

  const changeCardState = (id) => {
    return fetch('https://thierry.sytes.net/schralebingo/api/changecard/' + id)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.error(err)
      })
  }

  const changeCrossedStateCard = (card) => {
    Alert.alert(
      'Status veranderen?',
      "",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => {
          changeCardState(card.id)
          .then(() => fetchCards())
          .then(data => setCards(data))
        }},
      ],
      {cancelable: true},
    );
  }

  const renderCard = ({item}) => {
    return (
      <TouchableOpacity 
        style={[style.cardContainer, item.crossed ? style.crossed : null]}
        onPress={() => changeCrossedStateCard(item)}
      >
        <View style={style.textContainer}>

          <Text style={style.cardText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={style.container}>
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={(item, index) => `list-item-${index}`}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  cardContainer: {
    backgroundColor: "black",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    borderRadius:10,
    backgroundColor: "#333333",
  },
  cardText: {
    color: "white",
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "white"
  },
  crossed: {
    backgroundColor: "#4fe01a"
  }
});

AllCards.navigationOptions = ({ navigation }) => ({
  title: "All Cards",
  headerStyle: {
    backgroundColor: "gray",
  },
});

export default AllCards