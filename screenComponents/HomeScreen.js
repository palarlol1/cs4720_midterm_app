import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../assets/Styling/styles.js'


export default class HomePage extends Component{

    constructor(props){
        super(props)
        this.state = {
            bids : [],
            offers : []
        }
    }

    get_bids_view(bids){
        if (bids == null){
            return (
                <Text>Select one of your offers to see the bidders</Text>
            );
        } else if (bids){
            return (
                <Text>Not Empty!</Text>
            );
        } else { 
            return (
                <Text>No Bidders!</Text>
            )
        }
    }

    render(){
        return (
            <View style = {{...styles.container, paddingTop : 35, padding : 15}}>
                <View style = {{borderBottomColor : 'grey', borderBottomWidth : 3, width : "100%", padding : 15}}>
                    {/* Holds the title */}
                    <Text style = {{fontSize : 24, textAlign : "center"}}>Quick Fix</Text>
                </View>
                <View style = {{...styles.centered_container, ...styles.homePageChild, backgroundColor : "yellow", paddingTop : 100, justifyContent : "start", }}>
                    {/*This will hold the bids you have out*/}
                    {this.get_bids_view(this.state.bid)}
                </View>
                <View style = {{...styles.centered_container, ...styles.homePageChild, backgroundColor : "green"}}>
                    {/*This will hold the offers you have out*/}
                </View>
            </View>
        );
    }
}

