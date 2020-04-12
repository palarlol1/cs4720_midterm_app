//Library Calls
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import styles from './assets/Styling/styles.js'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//App Calls
import LoginScreen from './screenComponents/LoginScreen.js';
import HomePage from './screenComponents/HomeScreen';
import ProfileScreen from './screenComponents/ProfileScreen';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomePage}/>
        <Stack.Screen name = "Profile" component = {ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default function App({navigation}){
    //Hook to keep track of logging in
    const [token, setToken] = useState("")

    //log in presistence
    SecureStore.getItemAsync("token").then(
      (result) => {
        setToken(result)
      }
    )

    //If you need to login, then display login
    if (token == ""){
      return (
        <LoginScreen
          setToken = {setToken}
        />
      );
      //Login automatically if we already have your token
    } else {
      return (
        <NavigationContainer><HomePage/></NavigationContainer>

      )
    }



}
