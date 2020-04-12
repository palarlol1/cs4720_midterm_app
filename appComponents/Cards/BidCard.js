import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, ActivityIndicator } from 'react-native';
import styles from '../../assets/Styling/styles.js';
import { Button, Rating } from 'react-native-elements';
import Image from '../Image';

export default class BidCard extends Component{

    constructor(props){
        super(props)
        const { navigation } = this.props;
    }

    render(){
        return (
            <View style = {styles.bidCard}>
                {/*This holds the majority of the information, picture and then also the bid price and the name */}
                <View style = {{flex : 1, flexDirection : "row", justifyContent : "flex-start", alignItems : "flex-start", padding : 10}}>
                    <Image
                    height = {113}
                    width = {100}
                    source = {'../testResources/test_smile.png'}
                    />
                    <View style = {{flex : 1, flexDirection : "column", justifyContent : "flex-start", alignItems : "flex-start", padding : 10}}>
                        <Text style = {{fontSize : 30}}>{"$" + this.props.bid}</Text>
                        <Text style = {{fontSize : 19, color : "grey"}}>{this.props.name}</Text>
                        <Text></Text>
                        <Button
                            buttonStyle = {{
                                backgroundColor : "#23306E"
                            }}
                            title = {"See Profile"}
                            onPress = {
                                () => {
                                    navigation.navigate('Profile')
                                }
                            }
                        />
                    </View>
                </View>
                <Rating
                    readonly
                    startingValue = {this.props.rating}
                    imageSize = {25}
                />
                <View style = {{flex : 1, flexDirection : "row", justifyContent : "space-evenly", alignItems : 'center', padding : 0, width : "100%"}}>
                    {/* This View Holds the buttons */}
                    <Button
                        buttonStyle = {{
                            backgroundColor : "#006400"
                        }}
                        title = {"Take Bid"}
                        onPress = {
                            () => {
                                Alert.alert("Accepted")
                            }
                        }
                    />
                    <Button
                        buttonStyle = {{
                            backgroundColor : "#8B0000"
                        }}
                        title = {"Reject Bid"}
                        onPress = {
                            () => {
                                Alert.alert("Declined")
                            }
                        }
                    />
                </View>
            </View>
        );
    }
}