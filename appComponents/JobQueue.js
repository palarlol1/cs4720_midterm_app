import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import styles from '../assets/Styling/styles.js';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import JobCard from './JobCard.js';




export default class JobCarousel extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Carousel
            ref = {(c) => {this._carousel = c;}}
            data = {this.props.jobs}
            renderItem = {
                ({item, index}) => {
                    return (
                        <JobCard
                            heading = {item.heading}
                            description = {item.description}
                            priceRange = {item.priceRange}
                        />
                    );
                }
            }
            sliderWidth = {Dimensions.get('window').width}
            itemWidth = {Dimensions.get('window').width * .7}
            onSnapToItem = {
                (itemIndex) => {
                    var key = this.props.jobs[itemIndex].key
                    this.props.setBids(this.props.jobMap[key])
                }
            }
            />
        );
    }
}