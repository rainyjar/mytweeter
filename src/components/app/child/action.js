import React, { useState } from 'react';
import '../../../style.css';
import axios from 'axios';


function Action(props) {

    // state management
    let [likes, updateLikes] = useState(parseInt(props.likes))
    let [dislikes, updateDislikes] = useState(parseInt(props.dislikes))


    let teleportLikes = () => {
        console.log(likes);
        // likes = likes +1;
        // console.log(likes);
        updateLikes(likes + 1);

        // update the state of likes and dislikes
        let patchRequestBody = {
            "likes": likes + 1,
        }
        axios.patch('https://api-generator.retool.com/IWY4Od/faketweet/' + props.id, patchRequestBody)
            .then((response) => {
                console.log(response)
                    .catch((error) => {
                        console.log(error)
                    })
            })
    }

    let teleportDislikes = () => {
        console.log(dislikes);
        //    dislikes = dislikes +1;
        // console.log(dislikes);
        updateDislikes(dislikes + 1);

        // update the state of likes and dislikes
        // let patchRequestBody = {
        //     "dislikes": dislikes + 1,
        // }
        // axios.patch('https://api-generator.retool.com/IWY4Od/faketweet/' + props.id, patchRequestBody)
        //     .then((response) => {
        //         console.log(response)
        //             .catch((error) => {
        //                 console.log(error)
        //             })
        //     })
        props.called(props.id);
    }

    return (
        <div id="action">
            <div id="likes">
                <svg onClick={teleportLikes} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                <div id="likesnum">
                    {likes}
                </div>
            </div>

            <div id="dislikes">
                <svg onClick={teleportDislikes} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                <div id="dislikesnum">
                    {dislikes}
                </div>
            </div>
            {/* &nbsp; */}
            {/* <button onClick={teleportDislikes}>Dislike {dislikes}</button> */}
            {/* <h1 onClick =  {teleport}>{likes}</h1> */}
            {/* <h1 onClick =  {teleportDislikes}>{dislikes}</h1> */}
        </div>
    );
}

export default Action;