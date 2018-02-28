import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export default class Portfolio extends Component {

  render() {
    return (
    	<div className="Home">
			<h1>Portfolio</h1>
 			<img style={{height:'40px', width:'40px', display:'inline-block'}} src={require('../assets/enso-b.png')} alt=""/>	

      </div>
    )
  }

}

