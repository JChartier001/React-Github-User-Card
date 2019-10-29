import React from 'react';
import axios from "axios"
;
import './App.css';

class App extends React.Component{
  state = {
    user: []
  };
  
  componentDidMount(){
    console.log("cDM");
    axios.get('https://api.github.com/users/JChartier001')      
    .then(response => {   
      console.log(response.data)     
       this.setState({user: response.data});
        })
    .catch(error => {
        console.log(error)
    });
  }

  render() {
    console.log("rendering")
  return (
    <div className="App">
      <div className="ui card" key = {this.state.user.id}>
        <div className="image">
          <img src={this.state.user.avatar_url} alt="profile img" key="image"/>
          </div>
          <div className="content">
        <h1 className="header">{this.state.user.name}</h1>
        <p className="meta">{this.state.user.login}</p>
        <div className="description">
        <p>Location: {this.state.user.location}</p>
        <p>Profile: <a>{this.state.user.html_url}</a></p>
        <p>Bio: {this.state.user.bio}</p>
        </div>
        <div className="extra content">
  
      <i className="user icon"></i><p>Followers: {this.state.user.followers}</p>
        <p>Following: {this.state.user.following}</p>
        </div>
        </div>
        </div>      
    </div>
  );
};
}

export default App;
