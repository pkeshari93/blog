import React, { Component } from 'react'
import styled from 'styled-components'

// import PropTypes from 'prop-types';
const Container = styled.div`
  background: #fff;
	padding: 150px 5%;
	padding-bottom: 10px;
  color: #313740;
  line-height: 2;


  @media (min-width: 700px) {
    padding: 60px 20%;
  }
`
export default class About extends Component {

  render() {
  	const hOneStyle = {
        fontSize: "30px",
        paddingTop: "40px",
        display: "block",
        lineHeight: '1.5',
      }
	  const paraStyle = {
	    fontSize: "15px",
			padding: '10px 20px',
	    display: "block",
	    lineHeight: '2',
		}
		const divStyle = {
			display: 'block',
			background: '#fff',
			lineHeight: '2',
			color: '#313740',
			height: '100%'
		}
    return (
    	<Container>
				<h1 style={hOneStyle}>About</h1>	
				<hr style={{margin:"40px 15px", padding: '0px'}}/>
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
					So, let me take you on a journey through my blogs as I explore, discover 
					and challenge myself on my pursuit of becoming a better Developer at
					crafting beautiful and higly interactive user experiences with 
					the latest web technologies and languages.
				</p>
				<br/>
				<hr/>
      </Container>
    )
  }

}

