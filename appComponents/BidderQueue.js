import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import styles from '../assets/Styling/styles.js';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import BidCard from './Cards/BidCard';




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
                            bid = {item.bid}
                            name = {item.name}
                            rating = {item.rating}
                        />
                    );
                }
            }
            sliderWidth = {Dimensions.get('window').width}
            itemWidth = {Dimensions.get('window').width * .7}
            />
        );
    }
}