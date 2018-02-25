import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export default class Home extends Component{
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
    let blogPosts = this.state.blogPosts.map( (blogPost, index) => {
      return(
        <div key={index}>
          <h1>{blogPost.title.rendered}</h1>
          <p>{blogPost.excerpt.rendered}</p>

        </div>
      )
    })
    return (
    	<div className="Home">
			<h1>A Coder's Odyssey</h1>
			<img style={{height:'40px', width:'40px', display:'inline-block'}} src={require('../assets/enso-b.png')} alt=""/>	
        	{blogPosts}
      </div>
    )
  }

}

