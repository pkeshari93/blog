import React, { Component } from 'react'
import { Link } from 'react-router'
import '../stylesheets/header.css'
import styled from 'styled-components'
// var React = require('react');
var FontAwesome = require('react-fontawesome');



const Container = styled.div`
	width: 100%;
	height: auto;
	background: #fff;
	color: #1F2329;
	position: fixed;
	left: 0;
	top: 0;
	font-family: Sacramento;
	font-size: 35px;
	padding: 20px;
	

	@media (min-width: 700px) {
		font-size: 40px;
		display: inline-flex;
		justify-content: space-between;
	}
	
` 
const Logo = styled.h1`
	display: inline-block;
	float: center;
	padding: 10px 0;
	padding-right: 20px;
	// padding-left: 10px;
	white-space: nowrap;
`

const Nav = styled.nav`
	display: inline-block;
	float: center;
	color: #F2E8E4;
	padding: 10px 0;
	padding-right: 30px;
	white-space: nowrap;
`

const List = styled.li`
	display: inline-block;
  	margin: 5px 10px;
	font-size: 20px;
	backgorund: #fff;
	font-family: Comfortaa;
	a{
		text-decoration: none; 
		font-size: 20px;
  		display: inline-block;
		color: #1F2329;
        transition: .2s;		
	}
	  
	padding: 5px 5px;
	  
	&:hover ${List}{
		background:#1F2329;
		transition: .2s;
		a{			
			color:#fff;
		}
	}
`
export default class Header extends Component {

  render() {
    return (
    	<Container>    	
	    	<Logo>A Coder's Odyssey</Logo>
								
	    	<Nav>
	    			<ul style={{padding: "none"}}>
	    				<List><Link to="/blog">home</Link></List>
	    				<List><Link to="/about">about</Link></List>
	    			</ul>
	    	</Nav>
    	</Container>
    )
  }

}

