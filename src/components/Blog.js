import React, { Component } from 'react'
import { Link } from 'react-router'
import BlogPost from './BlogPost'

// import PropTypes from 'prop-types';

export default class Blog extends Component {
	constructor(props) {
    super(props)
    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    let blogPostUrl = 'http://localhost:8888/wp-json/wp/v2/posts'

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
          <p>{blogPost.date_gmt}</p>
          <h1>{blogPost.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{ __html: blogPost.excerpt.rendered}}></p>
          <hr/>


          <button><Link to={"post/" + blogPost.id}>Read More</Link></button>



        </div>
      )
    })
    return (
    	<div>
			    <h1>Blog</h1>
 			    <img style={{height:'40px', width:'40px', display:'inline-block'}} src={require('../assets/enso-b.png')} alt=""/>	
        	{blogPosts}

      </div>
    )
  }

}

