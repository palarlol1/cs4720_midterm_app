import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import styles from '../assets/Styling/styles.js';
import { Button, Rating } from 'react-native-elements';
import Image from './Image';


export default class JobCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style = {{...styles.bidCard, padding : 20}}>
                <View>
                    <Text style = {{fontSize : 36}}>{this.props.heading}</Text>
                </View>
                <View>
                    <Text style = {{color : "#808080", fontSize : 19}}>{"$" + this.props.priceRange[0] + " - " + "$" + this.props.priceRange[1]}</Text>
                </View>
                <ScrollView style = {{height : "30%"}}>
                    <Text style = {{fontSize : 16}}>{this.props.description}</Text>
                </ScrollView>
                <View style = {{flex : 1, flexDirection : "row", justifyContent : "space-evenly", alignItems : 'center', padding : 0, width : "100%"}}>
                    {/* This View Holds the buttons */}
                    <Button
                        buttonStyle = {{
                            backgroundColor : "#b3b304"
                        }}
                        title = {"Edit Job"}
                        onPress = {
                            () => {
                                Alert.alert("Edit Job")
                            }
                        }
                    />
                    <Button
                        buttonStyle = {{
                            backgroundColor : "#8B0000"
                        }}
                        title = {"Delete Job"}
                        onPress = {
                            () => {
                                Alert.alert("Delete Job")
                            }
                        }
                    />
                </View>
            </View>
        );
    }
}