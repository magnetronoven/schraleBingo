import React, { Component } from "react";
import { View, Text, Button, StyleSheet  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const BingoCard = (props) => {
  const object = props.navigation.getParam('object', null);


  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={style.container}>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Verwisseld Hongarije met Bulgarije </Text></View></View>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Dit wordt een veels te lange zin om het systeem te testen</Text></View></View>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Box Box Box Box Box Box Box Box Box Box Box </Text></View></View>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Box Box Box Box Box Box Box Box Box Box Box </Text></View></View>
        <View style={style.box}><Text style={style.middleText}>Schrale Stanus Bingo!</Text></View>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Box Box Box Box Box Box Box Box Box Box Box </Text></View></View>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Box Box Box Box Box Box Box Box Box Box Box </Text></View></View>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Box Box Box Box Box Box Box Box Box Box Box </Text></View></View>
        <View style={style.box}><View style={style.textContainer}><Text style={style.text}>Box Box Box Box Box Box Box Box Box Box Box </Text></View></View>
      </View>
    </View>
  );

}

const style = StyleSheet.create({
  container: {
    width: 350,
    height: 300,
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  box: {
    width: "33%",
    height: 100,
    borderWidth: 1,
    backgroundColor: "#fcf82d"
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleText: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "Roboto"
  },
  text: {
    textAlign: "center"
  }
});

BingoCard.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("object", null).name,
  headerStyle: {
    backgroundColor: navigation.getParam("object", null).color,
  },
});

export default BingoCard;