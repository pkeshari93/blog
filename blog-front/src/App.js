/*  jshint esversion: 6 */
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      blogPosts: []
    }
  }

  componentDidMount(){
    let blogPostUrl = "http://localhost:8888/wp-json/wp/v2/posts"

    // fetching the promise 
    fetch(blogPostUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        blogPosts: response
      })
    })
  }
  render() {
    let blogPosts = this.state.blogPosts.map(blogPost, index) => {
      return(
        <div key={index}>
          
        </div>
      )
    }
    return (
      <div className="App">
        <h1>A Coder's Odyssey</h1>
      </div>
    )
  }
}

export default App
