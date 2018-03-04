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

    const hOneStyle = {
      fontSize: "30px",
      paddingTop: "10px",
      display: "block"
    }
    const paraStyle = {
      fontSize: "15px",
      padding: "0 15px",
      display: "block"
    }

    const hTwoStyle = {
      fontSize: "20px",
      padding: "15px 15px",
      display: "block"
    }

    const buttonStyle = {
      background: "#F2E8E4",
      padding: "5px",
      marginTop: "10px",
      borderRadius: "10px",
      display: "inline-block",
      float: "center"
    }

    const dateStyle = {
      display: 'block',
      fontSize: "12px",
      paddingTop: "0 5px",
      float: "left"
    }

    let blogPosts = this.state.blogPosts.map( (blogPost, index) => {
      return(

        <div key={index}>
          <h2 style={hTwoStyle}>{blogPost.title.rendered}</h2>
          <p style={paraStyle} dangerouslySetInnerHTML={{ __html: blogPost.excerpt.rendered}}></p>
          <button style={buttonStyle}><Link style={{color: "#313740"}} to={"post/" + blogPost.id}>Read More</Link></button>
          <p style={dateStyle}>{blogPost.date_gmt}</p>
          <hr/>
        </div>
      )
    })
    return (
    	<div>
          <h1 style={hOneStyle}>Articles</h1>
          <hr style={{padding:"0 10px"}}/>
        	{blogPosts}

      </div>
    )
  }

}

