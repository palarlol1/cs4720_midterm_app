import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, ActivityIndicator } from 'react-native';
import styles from '../assets/Styling/styles';
import { Button, Rating } from 'react-native-elements';
import Image from '../appComponents/Image';

export default function ProfileScreen({navigation}){
    return (
        <View style = {styles.container}>
            <Text>Hello World!</Text>
        </View>
    )
}