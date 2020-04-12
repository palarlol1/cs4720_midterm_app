import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../assets/Styling/styles.js'
import BidderQueue from '../appComponents/BidderQueue'
import JobQueue from '../appComponents/JobQueue'


export default function HomePage({navigation}){


    //In the future, I'd like to have the bids and the jobs set up in firebase together.
    //For now, we'll simulate this with a JSON object
    var jobMap = {
        "a" : [{name : "Tuy Roki", rating : 1.2, bid : 4535}, {name : "Hal Ip", rating : 4.2, bid : 94753}, {name : "Hut Pol", rating : 3.2, bid : 84566}],
        "b" : [{name : "Msdfgdgi Fsdfgsdfguj", rating : 1.72, bid : 41}, {name : "sdfgsdPil Hsdfguy Isdfgsp", rating : 3.2, bid : 93}, {name : "Msdfger Jdfghsdes", rating : 4.2, bid : 172}]
    }

    const [jobs, setJobs] = useState([{key : 'a', heading : "Install Stove", priceRange : [400, 540], description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et odio pellentesque diam. Tempus quam pellentesque nec nam aliquam sem et. Facilisis magna etiam tempor orci eu lobortis elementum. Risus quis varius quam quisque id diam vel quam elementum. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Eget lorem dolor sed viverra ipsum nunc. Aliquam ultrices sagittis orci a scelerisque purus. Id diam vel quam elementum pulvinar etiam non quam lacus."}, {heading : "Paint Fence", priceRange : [64, 193], description : "Have a pretty long fence I need to get painted, will send pictures if that helps!", key : 'b'}])
    const [bids, setBids] = useState(jobMap[jobs[0].key])

    function get_bids_view(bids){
        if (bids.length != 0){
            return (
                <BidderQueue
                    bids = {bids}
                />
            );
        } else { 
            return (
                <View style = {styles.centered_container}>
                    <Text style = {{fontSize : 17}}>No Bidders, maybe increase your price?</Text>
                </View>
            )
        }
    }

    function get_job_queue(jobs){
        if (jobs.length != 0){
            return (
                <JobQueue
                    jobs = {jobs}
                    jobMap = {jobMap}
                    setBids = {setBids}
                />
            )
        } else {
            return (
                <View style = {styles.centered_container}>
                    <Text style = {{fontSize : 17}}>You don't have any jobs set right now!</Text>
                </View>
            )
        }
    }

    function render(){
        return (
            <View style = {{...styles.container, paddingTop : 35, padding : 15}}>
                <View style = {{width : "100%", padding : 15}}>
                    {/* Holds the title */}
                    <Text style = {{fontSize : 45, textAlign : "center"}}>Quick Fix</Text>
                </View>
                <View style = {{...styles.centered_container, ...styles.homePageChild, width : "100%", paddingTop : 0, justifyContent : "flex-start"}}>
                    {/*This will hold the bids you have out*/}
                    {get_bids_view(bids)}
                </View>
                <Text style = {{fontSize : 30, textAlign : "center"}}>My Jobs</Text>
                <View style = {{...styles.centered_container, ...styles.homePageChild}}>
                    {get_job_queue(jobs)}
                </View>
            </View>
        );
    }

    return render();
}

