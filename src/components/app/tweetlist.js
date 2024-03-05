import React, { useEffect, useState } from 'react';
import Tweet from './tweet';
import axios from 'axios';


function Tweetlist() {

    // transfer the data to the state
    let [tweets, updateTweets] = useState([])   // state hook

    let [dislikes, updateDislike] = useState([0])

    // API calling
    useEffect(() => {
        makeAPICall()
    }, [])

    let makeAPICall = () => {
        axios.get('https://retoolapi.dev/IWY4Od/faketweet')    // promise-based (async)
            .then((response) => {
                console.log(response)
                console.log(response.data)
                updateTweets(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let displayTweets = () => {
        return tweets.map((tweet, i) => {
            return (
                <Tweet user={tweet.username.toLowerCase()}
                    likes={tweet.likes}
                    dislikes={tweet.dislikes}
                    image={tweet.profilepic}
                    color='green'
                    id={tweet.id}
                    getcalled={callFromChild}
                    media='apu_still01_entrance_0-1.jpg'></Tweet>
            )
        })
    }

    // call from child
    let callFromChild = (myid) => {
        console.log("In tweetlist...." + myid)

        //get dislike value for given myid
        axios.get("https://retoolapi.dev/IWY4Od/faketweet/" + myid)
            .then((response) => {
                console.log(response.data)
                updateDislike(response.data.dislikes)
            })

        let rBody = {
            "dislikes": dislikes + 1
        }
        axios.patch("https://api-generator.retool.com/IWY4Od/faketweet/" + myid, rBody)
            .then((response) => {
                console.log(response.data)
            })
    }

    return (
        <div>
            <h3>List of Tweets:</h3>
            <div>
                {displayTweets()}
            </div>

            {/* <Tweet user='superman'
                likes='28'
                dislikes='0'
                image='cat.png'
                color='red'
                media='apu_still01_entrance_0-1.jpg'>

            </Tweet>
            <Tweet user='batman'
                likes='50'
                dislikes='21'
                image='amongusbody.png'
                color='orange'
                media='apu_still01_entrance_0-1.jpg'></Tweet>
            <Tweet user='wonder woman'
                likes='200'
                dislikes='32'
                image='pointing.jpg'
                color='pink'
                media='apu_still01_entrance_0-1.jpg'></Tweet> */}
        </div>

    );
}

export default Tweetlist;