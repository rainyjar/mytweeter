import React from 'react';
import Username from './child/username';
import Content from './child/content';
import ProfileImage from './child/profileimage';
import Action from './child/action';
import '../../style.css';
import Media from './child/media';

function Tweet(props) {

    let titleStyle = {
        color: props.color,
        fontFamily: 'Arial',
    }

    return (
        <div id='tweet'>  
        <div id='tweeterheader'>
        <h3 style={titleStyle}>Tweet</h3>
            <div id="post">
                <div id="profilepic">
                    <ProfileImage profile={props.image}></ProfileImage>
                </div>
                <div id="detail">
                    <div id="username">
                        <Username user1={props.user}></Username>
                    </div>
                    <div id="content">
                        <Content style={titleStyle} ></Content>
                    </div>
                </div>
            </div>
            <div id="media">
                <Media media={props.media}></Media>
            </div>
       
                <Action likes = {props.likes}
                    dislikes = {props.dislikes}
                    id={props.id}
                    called = {props.getcalled}></Action>
                <hr /> 
           
        </div>
            
            {/* <Action likes = {props.likes}
                    dislikes = {props.dislikes}></Action>
            <hr />   in JS, you close the element with its tag and a backslash <... /> */}
        </div>

    );
}

export default Tweet;