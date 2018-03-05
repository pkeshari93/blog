import React, { Component } from 'react'
// import PropTypes from 'prop-types';


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
      }
      const hThreeStyle = {
        fontSize: "12px",
        paddingBottom: "2px",
        display: "block",
        paddingTop: "20px",
      }
      const divStyle = {
        textAlign: 'Left',
        background: '#fff',
        lineHeight: '2',
        color: '#313740',
      }
  		
  		return(

  			<div style={divStyle}>
          <div style={{padding: '0 10px'}}>          
    				<h1 style={hOneStyle}>{this.state.post.title.rendered}</h1>
    				<h3 style={hThreeStyle}>{this.state.post.date}</h3>
            <img src={this.state.post.image} />
            <hr style={{margin:"0 15px", color: "#fff"}}/>
    				<p style={paraStyle} dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered}}></p>
          </div>
  			</div>
  		)
  	}
}