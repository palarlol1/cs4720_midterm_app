import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import styles from '../assets/Styling/styles.js';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import BidCard from './BidCard.js';




export default class BidCarousel extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Carousel
            ref = {(c) => {this._carousel = c;}}
            data = {this.props.bids}
            renderItem = {
                ({item, index}) => {
                    return (
                        <BidCard
                        item = {item}
                        />
                    );
                }
            }
            sliderWidth = {100}
            itemWidth = {95}
            />
        );
    }
}