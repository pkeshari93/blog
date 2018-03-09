import React, { Component } from 'react'
import { Link } from 'react-router'
import BlogPost from './BlogPost'
import styled from 'styled-components'


// import PropTypes from 'prop-types';

const BlogDiv = styled.div`
  background: #fff;
  padding: 10px 5%;
  color: #313740;
  line-height: 2;

  @media (min-width: 700px) {
    padding: 10px 20%;
  }
`
const PageTitle = styled.h1`
  font-size: 30px;
  display: block;
`
const BlogTitle = styled.h2`
  font-size: 20px;
  padding: 0 10px;
  paddingBottom: 5px;
  display: block;
`

const DateTag = styled.h3`
  font-size: 12px;
  padding-bottom: 2px;
  display: block;
`
const Paragraph = styled.p`
  font-size: 15px;
  padding-bottom: 10px;
  display: block;
  color: #313740;
`

const PostItem = styled.div`
  padding: 50px 20px;
  overflow: hidden;
`
const Button = styled.button`
  border: solid #000 1px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: inline-block;
  float: center;

  a{color: #313740;}
`
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

          <PostItem>
            <BlogTitle>{blogPost.title.rendered}</BlogTitle>
            <DateTag>{myDate}</DateTag>
            <div>
              {blogPost.better_featured_image ? (
                // console.log(blogPost.better_featured_image)
                <img src={blogPost.better_featured_image.media_details.sizes.thumbnail.source_url} />
              ) : (
                ''
              )}
            </div>
            <Paragraph dangerouslySetInnerHTML={{ __html: blogPost.excerpt.rendered}}></Paragraph>
            <Button><Link to={"post/" + blogPost.id}>Read More</Link></Button>
          </PostItem>
          <hr/>                                  
        </div>
      )
    })
    return (
    	<BlogDiv>
          <PageTitle>Articles</PageTitle>
          <hr style={{margin: '0 20%'}}/>
        	{blogPosts}
          <hr style={{margin:"10px 30px"}}/>
          <hr style={{margin:"10px 50px"}}/>          
      </BlogDiv>
    )
  }

}

