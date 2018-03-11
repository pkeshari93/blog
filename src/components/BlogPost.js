import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styled from 'styled-components'

const BlogPostDiv = styled.div`
  background: #fff;
  padding: 150px 5%;
  color: #313740;
  line-height: 2;
  overflow: hidden;

  @media (min-width: 700px) {
    padding: 80px 12%;
    padding-bottom: 10px;

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
                image: ''
              }
            })
          }else{
            this.setState({
              post: {
                date: response.date_gmt, 
                title: response.title, 
                content: response.content, 
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
      const hOneStyle = {
        fontSize: "30px",
        paddingTop: "20px",
        display: "block",
        lineHeight: '1.5',
      }
      const paraStyle = {
        fontSize: "15px",
        paddingBottom: "10px",
        display: "block",
        lineHeight: '2',
        paddingTop: "20px",
        textAlign: 'left'
      }
      const hThreeStyle = {
        fontSize: "12px",
        paddingBottom: "2px",
        display: "block",
        paddingTop: "20px",
      }
      const divStyle = {
        display: 'block',
        textAlign: 'left',
        background: '#fff',
        lineHeight: '2',
        color: '#313740',
        overflow: 'hidden'
      }
  		
  		return(

  			<BlogPostDiv>
          <div style={{padding: '0 10px'}}>          
    				<h1 style={hOneStyle}>{this.state.post.title.rendered}</h1>
    				<h3 style={hThreeStyle}>{myDate}</h3>
            <img src={this.state.post.image} />
            <hr style={{margin:"0 -5%", color: "#fff"}}/>
    				<p style={paraStyle} dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered}}></p>
            <hr style={{margin:"0 -15%", color: "#fff"}}/>            
          </div>
  			</BlogPostDiv>
  		)
  	}
}

