import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Home from "./screens/Home";
import Contamination from "./screens/Contamination";
import AmbientalProblems from "./screens/AmbientalProblems";
import News from "./screens/News";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName= "Inicio" screenOptions = {{headerShown : false}}  > 
  <Stack.Screen name = "Inicio" component = {Home} />
  <Stack.Screen name = "Contamination" component = {Contamination} />
  <Stack.Screen name = "AmbientalProblems" component = {AmbientalProblems} />
  <Stack.Screen name = "News" component = {News} />
  
   </Stack.Navigator>
  </NavigationContainer>
  );
}

