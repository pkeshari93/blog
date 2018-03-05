import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export default class About extends Component {

  render() {
  	const hOneStyle = {
        fontSize: "30px",
        paddingTop: "20px",
        display: "block",
        lineHeight: '1.5',
      }
	  const paraStyle = {
	    fontSize: "15px",
	    paddingBottom: "10px",
	    padding: "0 20px",
	    display: "block",
	    lineHeight: '2',
	    paddingTop: "20px",
	  }
    return (
    	<div className="About">
			<h1 style={hOneStyle}>About</h1>	
			<hr/>
			<p style={paraStyle}>
				Hey there! I am Prakhar. I am a Software Engineer and a Full-stack 
				developer with a passion for CREATING and BUILDING simple tools that 
				help simple people like you and I to optimize our lives and work on 
				things that matter and move us forward.
			</p>
			<br/>
			<p style={paraStyle}>
				I believe every challenge is 
				an opportunity for us to come out better and stronger. We must use 
				every single day to hunt down these challenges and use them as opportunities 
				to solve problems.
			</p>
			<br/>
			<p style={paraStyle}>
				So, let me take you on a journey through my blogs as I explore and discover my passion of 
				crafting beautiful and higly interactive user experiences with 
				the latest web technologies and languages.
			</p>
			<br/>
			<hr/>




      </div>
    )
  }

}

