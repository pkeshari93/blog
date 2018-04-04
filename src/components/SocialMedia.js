import React, { Component } from 'react'
import styled from 'styled-components'
var FontAwesome = require('react-fontawesome');

const Container = styled.div`
    display: block;
    background: #fff;
    padding: 8px 10px;
    border-radius: 10px;
    color: #313740;
    li{
        display: inline-block;
        padding: 0px 8px;
        margin: 0px 10px;
    }
    position: fixed;
    bottom: 0px;
    margin: 0px;
    left: 10%;
    right: 10%;
	// left: 0;

    @media (min-width: 700px) {
        padding: 2px 10px;        
        display: inline-block;
        width: 52px;
        justify-content: space-around;
        // position: absolute;
        top: 100px;
        left: 10px;
        right: 0;
        ul{
            display: block;
        }
	}
`
const Connect = styled.h1`
    font-size: 20px;
    padding: 10px;

`

const Social = styled.a`
    padding: 2px;
    margin: 10px 0;
    color: #333;
    display: inline-block;
    text-decoration: none;
    &:hover ${Social}{       
        padding-left: 30px;
        padding-right: 5px;
        background: #000;
        border-radius: 5px;
        color: #fff;
        transition: .2s;
    }
`

export default class SocialMedia extends Component{
    render(){
        return(
            <Container>
                {/* <Connect>Connect with me</Connect> */}
                <ul>
                    <li><Social target="_blank" href="https://www.linkedin.com/in/prakhar-keshari-68163b84/"><i className="fab fa-linkedin-in fa-2x"></i></Social></li>
                    <li><Social target="_blank" href="https://github.com/pkeshari93"><i className="fab fa-github-square fa-2x"></i></Social></li>
                    <li><Social target="_blank" href="https://www.instagram.com/prakhar.odyssey/"><i className="fab fa-instagram fa-2x"></i></Social></li>
                    <li><Social target="_blank" href="https://www.facebook.com/keshari.prakhar"><i className="fab fa-facebook-square fa-2x"></i></Social></li>  
                </ul>                                              
            </Container>
        )
    }
}