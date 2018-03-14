import React, { Component } from 'react'
import styled from 'styled-components'

// import PropTypes from 'prop-types';
const Container = styled.div`
	background: #fff;
	padding: 10px 5%;
	padding-top: 210px;
	font-family: Comfortaa;
	color: #313740;
	line-height: 2.5;


	@media (min-width: 700px) {
		padding: 10px 20%;
		padding-top: 130px;
		
	}
`
const PageTitle = styled.h1`
  font-size: 30px;
  display: block;
`
const Img = styled.img`
	width: 40%;
	min-width: 200px;
	height: auto;
	margin: 20px;
`
const Paragraph = styled.p`
  font-size: 18px;
  padding-bottom: 10px;
  display: block;
  color: #313740;
  // text-align: left;
`
const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`
export default class About extends Component {

  render() {
    return (
    	<Container>
				<PageTitle>About</PageTitle>	
				<Hr/>
				<Img src={require('../assets/me.jpg')}/>
				<Paragraph>
					Hey there! I am Prakhar. I am a Software Engineer and a Full-stack 
					developer with a passion for CREATING and BUILDING simple tools that 
					help simple people like you and I to optimize our lives and work on 
					things that matter and move us forward.
				</Paragraph>
				<br/>
				<Paragraph>
					I believe every challenge is 
					an opportunity for us to come out better and stronger. We must use 
					every single day to hunt down these challenges and use them as opportunities 
					to solve problems.
				</Paragraph>
				<br/>
				<Paragraph>
					So, let me take you on a journey through my blogs as I explore, discover 
					and challenge myself on my pursuit of becoming a better Developer at
					crafting beautiful and higly interactive user experiences with 
					the latest web technologies and languages.
				</Paragraph>
				<br/>
				<Hr/>
      </Container>
    )
  }

}

