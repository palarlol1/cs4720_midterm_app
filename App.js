//Library Calls
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import styles from './assets/Styling/styles.js'

//App Calls
import LoginScreen from './screenComponents/LoginScreen.js'
import HomePage from './screenComponents/HomeScreen'




export default function App(){

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
        <HomePage
        />
      )
    }



}
