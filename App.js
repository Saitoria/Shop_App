import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';
import Login from "./app/screens/login";
import 'react-native-gesture-handler';
import Navigation from "./app/Navigation";
import Home from "./app/screens/home";

function App()
{
  return(
    <Navigation/>
    //<Home/>
    //<Login/>
  );
}

const styles = StyleSheet.create({

});

export default App;
