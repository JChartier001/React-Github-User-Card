import React from "react";


const FollowersCard = (props) =>{
    console.log("this is props", props);

    return(
        props.followers.map((follower => {
            return(
        <div className="ui card" key = {follower.id}>
            <div className="image">
                <img src={follower.avatar_url} alt="profile img" key="image"/>
                </div>
             <div className="content">
                <h1 className="header">{follower.name}</h1>
                <p className="meta">{follower.login}</p>
                <div className="description">
                <p>Location: {follower.location}</p>
                <p>Profile: <a>{follower.html_url}</a></p>
                <p>Bio: {follower.bio}</p>
            </div>
            <div className="extra content">
                <i className="followers icon"></i><p>Followers: {follower.followers}</p>
                <p>Following: {follower.following}</p>
             </div>
        </div>
        </div>      

            )
        })))};
        
    
export default FollowersCard;