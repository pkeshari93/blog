import React, { Component } from 'react'
import { Link } from 'react-router'
import '../stylesheets/header.css'
// import PropTypes from 'prop-types';

export default class Header extends Component {

  render() {
  	const headerStyles = {
  		width: "100%",
  		height: "auto",
  		background: "#313740",
  		color: "#F2E8E4",
  	}
  	const iconStyle = {
  		height: "40px",
  		width: "40px",
  		display: "inline-block",
  		float: "center",
  		padding: "15px"
  	}

  	const navStyle = {
  		display: "block",
  		float: "center",
  		color: "#F2E8E4",
  		paddingBottom: "10px"

  	}

  	const hStyle = {
  		display: "block",
  		float: "center",
  		fontSize: "30px",
  		paddingTop: "10px"

  	}

  	let liStyle = {
  		display: 'inline-block',
  		margin: "0 10px",
  	}
    return (
    	<div style={headerStyles}>    	
	    	<h1 style={hStyle}>A Coder's Odyssey</h1>
	    	<img style={iconStyle} src={require('../assets/enzo.png')} alt=""/>
	    	<nav style={navStyle}>
	    		<div>
	    			<ul style={{padding: "none"}}>
	    				<li style={liStyle}><Link to="/blog">home</Link></li>
	    				<li style={liStyle}><Link to="/about">about</Link></li>
	    			</ul>
	    		</div>
	    	</nav>
    	</div>

    )
  }

}

