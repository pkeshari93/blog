import React, { Component } from 'react'
import { Link } from 'react-router'
import '../stylesheets/header.css'
import styled from 'styled-components'
// var React = require('react');
var FontAwesome = require('react-fontawesome');



const Container = styled.div`
	width: 100%;
	height: auto;
	background: #1F2329;
	color: #fff;


	@media (min-width: 700px) {
		display: inline-flex;
		justify-content: space-between;
	}
	
` 
export default class Header extends Component {

  render() {
  	const headerStyles = {
  		width: "100%",
  		height: "auto",
  		background: "#1F2329",
  		color: "#fff",
  	}
  	const iconStyle = {
  		height: "40px",
  		width: "40px",
  		display: "inline-block",
  		float: "center",
		padding: "15px", 
  	}

  	const navStyle = {
  		display: "block",
  		float: "center",
  		color: "#F2E8E4",
		padding: "10px 0",
		paddingRight: "2%",
		alignSelf: "center",
		  

  	}

  	const hStyle = {
  		display: "block",
  		float: "center",
  		fontSize: "25px",
		padding: "10px 0",
		paddingLeft: "2%",
		alignSelf: "center",		

  	}

  	let liStyle = {
  		display: 'inline-block',
		margin: "0 10px",
		fontSize: "20px"  
	}

	// let iStyle = {
	// 	display: "inline-block",
  	// 	float: "center",
	// 	padding: "15px", 
	// }
	  
    return (
    	<Container>    	
	    	<h1 style={hStyle}>A Coder's Odyssey</h1>
			<div>
				{/* <i className="fab fa-html5 fa-2x" style={iStyle}></i>						
				<i className="fab fa-css3-alt fa-2x" style={iStyle}></i>												 */}
				{/* <img style={iconStyle} src={require('../assets/enzo.png')} alt=""/> */}
				{/* <i className="fab fa-js fa-2x" style={iStyle}></i>
				<i className="fab fa-react fa-2x" style={iStyle}></i>	 */}
			</div>					
	    	<nav style={navStyle}>
	    		<div>
	    			<ul style={{padding: "none"}}>
	    				<li style={liStyle}><Link to="/blog">home</Link></li>
	    				<li style={liStyle}><Link to="/about">about</Link></li>
	    			</ul>
	    		</div>
	    	</nav>
    	</Container>
    )
  }

}

