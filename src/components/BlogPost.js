import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export default class BlogPost extends Component {

	constructor(props){
		super(props)
		this.state = {
			post:{
				'id': '',
				'title': '',
				'excerpt': ''
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
        		post: {id: response.id, title: response.title, excerpt: response.excerpt}
      		})
      		console.log(this.state.post)
    	})
  	}
  	render(){
  		
  		return(

  			<div>
  				<h1>Hello</h1>
  				<h1>{this.state.post.title.rendered}</h1>
  				<h1>{this.state.post.excerpt.rendered}</h1>

  			</div>
  		)
  	}
}