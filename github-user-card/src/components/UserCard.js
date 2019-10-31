import React from "react";


const UserCard = (props) =>{
    console.log("this is props", props);

    return(
        <div className="ui card" key = {props.user.id}>
        <div className="image">
          <img src={props.user.avatar_url} alt="profile img" key="image"/>
          </div>
          <div className="content">
        <h1 className="header">{props.user.name}</h1>
        <p className="meta">{props.user.login}</p>
        <div className="description">
        <p>Location: {props.user.location}</p>
        <p>Profile: <a>{props.user.html_url}</a></p>
        <p>Bio: {props.user.bio}</p>
        </div>
        <div className="extra content">
  
      <i className="user icon"></i><p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
        </div>
        </div>
        </div>      
    );
}
export default UserCard;