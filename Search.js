import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class Search extends Component {
  constructor(props){
    super(props);
    this.state= {value:[]}
  }

  componentDidMount(){
    var mama=this;
    this.serverRequest =
    axios
        .get("http://localhost:3004/opppo")
        .then(function (result) {
            mama.setState({
              value:result.data

            });
            alert(mama.state.value);
        })
  }
  render() {
  return (
      <div className='Search'>
        {this.state.value.type}
      </div>
    );
  }
}

export default Search;
