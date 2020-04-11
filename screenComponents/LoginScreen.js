import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import * as Facebook from 'expo-facebook';
import styles from '../assets/Styling/styles.js'




//Simple login screen that can login with facebook and store token inside the secureStore
export default class LoginScreen extends Component{

    render(){
        return (
            <View style={styles.container}>                    
                <View style = {{ flex : 1, top : "30%", alignItems : 'center'}}>
                    <Text style = {styles.app_title}>Quick Fix</Text>
                    <Text style = {{fontSize : 16}}>Fast solutions, any problem.</Text>
                    <View style = {{flex : 1, top : '40%', alignItems : 'center'}}>
                        <Button
                        title = "Login With Facebook"
                        onPress = {
                            //logging into facebook information
                            async () => {
                                await Facebook.initializeAsync('236553444035046')
                                let { type, token } = await Facebook.logInWithReadPermissionsAsync({
                                    permissions : ["public_profile"]
                                })

                                if (type == "success"){
                                    await SecureStore.setItemAsync('token', token);
                                    this.props.setToken(token)
                                }
                            }
                        }
                        />
                    </View>
                </View>
            </View>
        );
    }
}