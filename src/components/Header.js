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
	position: fixed;
	left: 0;
	opacity: .8;
	

	@media (min-width: 700px) {
		display: inline-flex;
		justify-content: space-between;
	}
	
` 
const List = styled.li`
	display: inline-block;
  	margin: 0 10px;
  	font-size: 20px;
	padding: 5px 5px;
	  
	&:hover ${List}{
		background:#fff;
		// opacity: .8;
		transition: .2s;
		a{
			color:#333;
		}
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
  		display: "inline-block",
  		float: "center",
  		color: "#F2E8E4",
		padding: "10px 0",
		paddingRight: "2%",
		whiteSpace: 'nowrap',
		
		  

  	}

  	const hStyle = {
  		display: "inline-block",
  		float: "center",
  		fontSize: "25px",
		padding: "10px 2%",
		whiteSpace: 'nowrap',
  	}

  	// let liStyle = {
  	// 	display: 'inline-block',
	// 	margin: "0 10px",
	// 	fontSize: "20px" ,
	// 	padding: "0 10px", 
	// }

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
	    			<ul style={{padding: "none"}}>
	    				<List><Link to="/blog">home</Link></List>
	    				<List><Link to="/about">about</Link></List>
	    			</ul>
	    	</nav>
    	</Container>
    )
  }

}

