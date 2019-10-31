import React from "react";
import axios from "axios";

const searchUsers = props =>{
  console.log("search", props);
 
    // console.log("cDU");
    // const [userRes, followersRes] = await Promise.all([
    //   axios.get(`https://api.github.com/users/${this.state.user}`),
    //   axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    // ]);
    // this.setState({
    //   user: userRes.data,
    //   followers: followersRes.data
    // });
 
  
  return (
    <div className="searchUsers">
    <input type="text" value={props.searchText}
      onChange={props.handleChanges}/>
           <button onClick={props.userSearch}>Search Users</button>
           {/* this.state.doggos.length === 0 && <p>Loading cuteness...</p>} */}
           </div>
  )
}
export default searchUsers;
