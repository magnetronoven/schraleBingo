import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import BingoCard from "./components/BingoCard";

const HomeScreen = (props) => {

  const data = [
    {
      name: "Alec",
      color: "#FF0000",
    },
    {
      name: "Jeroen",
      color: "#00FF00",
    }
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {data.map((object, i) => (
        <View 
          key={i}
          style={{marginBottom: 20, marginLeft: 30, marginRight: 30}}>
          <Button
            containerViewStyle={{width: '100%', marginLeft: 0}}
            title={object.name}
            onPress={() => props.navigation.navigate('BingoCard', {object})}
            color={object.color}
          />
        </View>
      ))}
    </View>
  );
  
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "Schrale Bingo!"
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    BingoCard: BingoCard
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
      }
    }
  }
);

export default createAppContainer(AppNavigator);