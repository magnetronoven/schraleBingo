import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import BingoCard from "./components/BingoCard"
import { Audio } from 'expo-av'
import AllCards from "./components/AllCards"

const HomeScreen = ({ navigation }) => {

  let [players, setPlayers] = useState([]);


  useEffect(() => {
    navigation.setParams({ 
      hideHeader: true,
    }) 
    console.log("Reload bingoCardss")
    fetchPlayers().then(data => setPlayers(data))

    const soundObject = new Audio.Sound();

    soundObject.loadAsync(require('./assets/erika.mp3'))
    .then(sound => {
      soundObject.playAsync()
        .then(() => {})
    })

  }, [])

  const fetchPlayers = () => {
    return fetch('https://thierry.sytes.net/schralebingo/api/players')
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.error(err);
        console.log()
      })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' , backgroundColor: "black"}}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode={'contain'}
          source={require('./assets/schraleBingoLogo.png')}
        />
      </View>
      <View style={style.buttonContainer}>
        {players.map((player, i) => (
          <View 
            key={i}
            style={style.buttons}>
            <Button
              containerViewStyle={{width: '100%', marginLeft: 0}}
              title={player.name}
              onPress={() => navigation.navigate('BingoCard', {player})}
              color={player.color}
            />
          </View>
        ))}
        <View 
            style={style.buttons}>
            <Button
              containerViewStyle={{width: '100%', marginLeft: 0}}
              title="All Cards"
              onPress={() => navigation.navigate('AllCards')}
              color="gray"
            />
          </View>
      </View>
    </View>
  );
  
}

const style = StyleSheet.create({
  image: {

      width: "100%",
      
  },
  imageContainer:{
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  buttons: {
    marginBottom: 20,
    marginLeft: 30, 
    marginRight: 30
  },
  buttonContainer: {
    flex: 1
  }
});

const AppNavigator = createStackNavigator(
  {
    BingoCard: BingoCard,
    AllCards: AllCards,
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null //this will hide the header
      },
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    cardStyle: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  }
);

export default createAppContainer(AppNavigator);