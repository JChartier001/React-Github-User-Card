import React from 'react';
import axios from "axios"
import UserCard from "./components/UserCard";
import FollowersCard from "./components/FollowersCard";
import './App.css';

class App extends React.Component{
  state = {
    user: [],
    followers: []
  };
  
  async componentDidMount(){
    console.log("cDM");
    const [userRes, followersRes] = await Promise.all([
      axios.get('https://api.github.com/users/JChartier001'),
      axios.get('https://api.github.com/users/JChartier001/followers')
    ]);
    console.log("user", userRes);
    console.log("followers", followersRes);
    this.setState({
      user: userRes.data,
      followers: followersRes.data
    });
  }

  componentDidUpdate

  render() {
    console.log("rendering")
  return (
    <div className="App">
      <UserCard user={this.state.user} />
      <h3>{this.state.user.name}'s Followers:</h3>
      <FollowersCard followers={this.state.followers} />
    </div>
  );
};
}

export default App;
