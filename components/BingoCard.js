import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const BingoCard = (props) => {
  const player = props.navigation.getParam('player', null);

  let [bingoCards, setBingoCards] = useState([
    {"player":player.name,"text":"","crossed":0},
    {"player":player.name,"text":"","crossed":0},
    {"player":player.name,"text":"","crossed":0},
    {"player":player.name,"text":"","crossed":0},
    {"player":player.name,"text":"","crossed":0},
    {"player":player.name,"text":"","crossed":0},
    {"player":player.name,"text":"","crossed":0},
    {"player":player.name,"text":"","crossed":0},
  ]);

  useEffect(() => {
    console.log("Reload bingoCards")
    fetchBingoCards().then(data => setBingoCards(data))
  }, []);

  const fetchBingoCards = () => {
    return fetch('https://thierry.sytes.net/schralebingo/api/bingocards')
      .then((res) => res.json())
      .then((data) => data.filter((card) => {
        return card.player == player.name
      }))
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "black"}}>
      <View style={style.container}>
        {
          bingoCards.map((card, i) => {
            if(i == 4) return <View key={i} style={style.box}><Text style={style.middleText}>Schrale Stanus Bingo!</Text></View>;
            return <View key={i} style={[style.box, card.crossed ? style.crossed : null]}><View style={style.textContainer}><Text style={[style.text, card.crossed ? style.crossed : null]}>{card.text}</Text></View></View>;
          })
        }
      </View>
    </View>
  );

}

const style = StyleSheet.create({
  container: {
    width: "90%",
    height: 300,
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "space-between",
    padding: 1,
    margin: 0
  },
  box: {
    width: "32%",
    height: 100,
    borderWidth: 1,
    backgroundColor: "#333333",
    marginTop: 5,
    borderRadius:10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "white"
  },
  middleText: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "Roboto",
    color: "white"
  },
  text: {
    textAlign: "center",
    color: "white"
  },
  crossed: {
    backgroundColor: "#4fe01a"
  }
});

BingoCard.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("player", null).name+"'s Bingo Kaart",
  headerStyle: {
    backgroundColor: navigation.getParam("player", null).color,
  },
});

export default BingoCard;