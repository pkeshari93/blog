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
    let blogPostUrl = 'http://localhost:8888/wp-json/wp/v2/posts?_embed'

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
      display: "block"
    }
    const paraStyle = {
      fontSize: "15px",
      paddingBottom: "10px",
      display: "block",
      color: '#313740'
    }

    const hTwoStyle = {
      fontSize: "20px",
      padding: "0 10px",
      paddingBottom: "5px",
      display: "block",
    }

    const buttonStyle = {
      background: "#656A73",
      padding: "5px",
      marginBottom: "10px",
      borderRadius: "10px",
      display: "inline-block",
      float: "center"
    }

    const hThreeStyle = {
      fontSize: "12px",
      paddingBottom: "2px",
      display: "block"

    }

    const divStyle = {
      background: "#fff",
      padding: "10px",
      color: '#313740',
      lineHeight: '2',
    }

    const postItem = {
      padding: '50px 20px',
      overflow: 'hidden',
      
    }



    let blogPosts = this.state.blogPosts.map( (blogPost, index) => {
      
      let month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      let date = new Date(blogPost.date_gmt)
      let n = month[date.getMonth()];
      let myDate = n +' '+ + date.getDate()  +  ", " + date.getFullYear()
      return(

        <div key={index}>

          <div style={postItem}>
            <h2 style={hTwoStyle}>{blogPost.title.rendered}</h2>
            <h3 style={hThreeStyle}>{myDate}</h3>
            <div>
              {blogPost.better_featured_image ? (
                // console.log(blogPost.better_featured_image)
                <img src={blogPost.better_featured_image.media_details.sizes.thumbnail.source_url} />
              ) : (
                ''
              )}
            </div>
            <p style={paraStyle} dangerouslySetInnerHTML={{ __html: blogPost.excerpt.rendered}}></p>
            <button style={buttonStyle}><Link style={{color: "#fff"}} to={"post/" + blogPost.id}>Read More</Link></button>
          </div>
          <hr/>                                  
        </div>
      )
    })
    return (
    	<div style={divStyle}>
          <h1 style={hOneStyle}>Articles</h1>
          <hr style={{margin: '0 20%'}}/>
        	{blogPosts}
          <hr style={{margin:"10px 30px"}}/>
          <hr style={{margin:"10px 50px"}}/>          
      </div>
    )
  }

}

