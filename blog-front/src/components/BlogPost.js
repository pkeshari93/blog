import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export default class BlogPost extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
      		post: {}
    	};
  	}

  	

 	render() {
 		let postUrl = 'http://localhost:8888/wp-json/wp/v2/posts/' + 'this.props.match.params.id'
 		fetch(postUrl)
 		.then(response => response.json()) 
    	.then(response => {
      	this.setState({
        	post: response
      	})
    })
    	return (
    		<div className="Home">
				<h1>Blog Post</h1>
 				<img style={{height:'40px', width:'40px', display:'inline-block'}} src={require('../assets/enso-b.png')} alt=""/>
 				<p></p>
          		<hr/>	
      		</div>
    	)
  	 }

}