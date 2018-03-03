import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export default class BlogPost extends Component {

	constructor(props){
		super(props)
		this.state = {
			post:{
				'date': '',
				'title': '',
				'content': ''
			}
		}
	}

	componentDidMount(){
    	let postUrl = 'http://localhost:8888/wp-json/wp/v2/posts/' + this.props.params.id
    	console.log(postUrl)
    	fetch(postUrl)
    	.then(response => response.json()) 
    	.then(response => {
      		this.setState({
        		post: {date: response.date_gmt, title: response.title, content: response.content}
      		})
      		console.log(this.state.post)
    	})
  	}
  	render(){
  		
  		return(

  			<div>

  				<h1>{this.state.post.title.rendered}</h1>
  				<p>{this.state.post.date}</p>
  				<p dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered}}></p>

  			</div>
  		)
  	}
}