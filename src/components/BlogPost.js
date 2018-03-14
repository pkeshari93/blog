import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div`
  background: #fff;
  padding: 210px 5%;
  padding-bottom: 10px;
  font-family: Comfortaa;  
  color: #313740;
  line-height: 2;
  overflow: hidden;

  @media (min-width: 700px) {
    padding: 130px 12%;
    padding-bottom: 10px;
  }
`
const ArticleTitle = styled.h1`
  font-size: 30px;
  display: block;
  padding-bottom: 20px;
`

const DateAuthor = styled.h3`
  font-size: 15px;
  padding-bottom: 2px;
  display: block;
  text-align: center;
`
const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`

const Content = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
  display: block;
  line-height: 2;
  padding-top: 20px;
  text-align: left;
  h1{
    font-size: 25px;
  }
  p{
    font-size: 18px;
    padding-bottom: 10px;
    display: block;
    color: #313740;
  }

  pre{
    display: block;
    text-align: center;
    img{
      display: inline-block;
      padding: 50px;
    }
  }
  
`
export default class BlogPost extends Component {

	constructor(props){
		super(props)
		this.state = {
			post:{
				'date': '',
				'title': '',
        'content': '',
        'author': '',
        'image': ''
			}
		}
	}

	componentDidMount(){
    	let postUrl = 'http://localhost:8888/wp-json/wp/v2/posts/' + this.props.params.id + '?_embed'
    	console.log(postUrl)
    	fetch(postUrl)
    	.then(response => response.json()) 
    	.then(response => {
      		// this.setState({
        // 		post: {
        //       date: response.date_gmt, 
        //       title: response.title, 
        //       content: response.content, 
        //       image: response.better_featured_image.media_details.sizes.thumbnail.source_url
        //     }
      		// })
          if(response.better_featured_image == null){
            this.setState({
              post: {
                date: response.date_gmt, 
                title: response.title, 
                content: response.content,
                author: response._embedded.author[0].name, 
                image: ''
              }
            })
          }else{
            this.setState({
              post: {
                date: response.date_gmt, 
                title: response.title, 
                content: response.content, 
                author: response._embedded.author[0].name,                 
                image: response.better_featured_image.media_details.sizes.medium.source_url
              }
            })
          }
      		console.log(this.state.post)
    	})
  	}
  	render(){
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
      let date = new Date(this.state.post.date)
      let n = month[date.getMonth()];
      let myDate = n +' '+ + date.getDate()  +  ", " + date.getFullYear()
  		
  		return(

  			<Container>
          <div style={{padding: '0 10px'}}>          
    				<ArticleTitle>{this.state.post.title.rendered}</ArticleTitle>
            <DateAuthor>Penned by, {this.state.post.author}</DateAuthor>
    				<DateAuthor>{myDate}</DateAuthor>
            <img style={{margin: "20px"}} src={this.state.post.image} />
            <Hr/>
    				<Content dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered}}></Content>
            <Hr/>            
          </div>
  			</Container>
  		)
  	}
}

