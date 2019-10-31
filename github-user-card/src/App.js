import React from 'react';
import axios from "axios"
import UserCard from "./components/UserCard";
import FollowersCard from "./components/FollowersCard";
import './App.css';
import SearchUsers from "./components/SearchUsers"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: [],
      followers: [],
      searchText:""
    };
  }
  
  
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
   handleChanges = e => {
    this.setState({
      searchText: e.target.value
    });
  };

   userSearch = async () =>{
    console.log(this.state);
    const [userRes, followersRes] = await Promise.all([
      axios.get(`https://api.github.com/users/${this.state.searchText}`),
      axios.get(`https://api.github.com/users/${this.state.searchText}/followers`)
    ]);
    console.log("user", userRes);
    console.log("followers", followersRes);
    this.setState({
      user: userRes.data,
      followers: followersRes.data
    });
  }
  //   axios
  //   .get(`https://api.github.com/users/${this.state.user}`)
  //   .then(response => {
  //     this.setState({ user: response.data });
  //     return axios.get(`https://api.github.com/users/${this.state.user}/followers`);
  //   })
  //   .then(response => {
  //     this.setState({ followers: response.data });
  //    })
  //   .catch(error => console.log(error.response));
  // }
  
  render() {
    console.log("rendering")
  return (
    <div className="App">
    {this.searchText !== 0 ? <SearchUsers user={this.state.user} followers={this.state.followers}
      searchText={this.state.searchText} handleChanges={this.handleChanges} userSearch={this.userSearch}/> : null}
      {/* <SearchUsers user={this.state.user} followers={this.state.followers}
      searchText={this.state.searchText} handleChanges={this.handleChanges} userSearch={this.userSearch}/>      */}
      <UserCard user={this.state.user}/>   
    <div className="followers">
      <h3>{this.state.user.name}'s Followers:</h3>
      <FollowersCard followers={this.state.followers} />
      </div>
    </div>
  );
}
}


export default App;
