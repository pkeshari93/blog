import React, { Component } from 'react'
import { Link } from 'react-router'
// import PropTypes from 'prop-types';

export default class Header extends Component {

  render() {
    return (
    	<nav>
    		<div>
    			<ul>
    				<li><Link to="/home">home</Link></li>
    				<li><Link to="/blog">blog</Link></li>
    			</ul>
    		</div>
    	</nav>
    )
  }

}

