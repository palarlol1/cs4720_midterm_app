import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import styles from '../assets/Styling/styles.js';
import { Image } from 'react-native-elements';

export default class myImage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Image
            source = {{uri : this.props.source}}
            style = {{width : this.props.width, height : this.props.height}}
            PlaceholderContent = {<ActivityIndicator/>}
            />
        );
    }
}