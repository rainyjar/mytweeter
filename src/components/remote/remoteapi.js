import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RemoteAPI() {

    // transfer the data to the state
    let [tweets, updateTweets] = useState([])   // state hook

    // API calling
    useEffect(() => { 
        makeAPICall() 
    }, [])

    let makeAPICall = () => {
        axios.get('https://retoolapi.dev/IWY4Od/faketweet')    // promise-based (async)
        .then((response)=> {
            console.log(response)
            console.log(response.data)
            updateTweets(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    let displayTweets = () => {
        return tweets.map((tweet, index) => {
            console.log(tweet)
            console.log(index)
            return (
                <li>
                    {'@' + tweet.username.toLowerCase()}
                </li>
            )
        })
    }


    return (
        <div>
            <h1> Make API call</h1>
            <h3>{tweets.length}</h3>
            <div>
                <ol>
                    {displayTweets()}
                </ol>
            </div>
        </div>
    );
}

export default RemoteAPI;