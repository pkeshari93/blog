import React, { Component } from 'react'
import styled from 'styled-components'
var FontAwesome = require('react-fontawesome');

const Container = styled.div`
    display: block;
    background: #fff;
    padding: 2px 10px;
    border-radius: 10px;
    opacity: .8;
    // border: solid 1px #333;
    margin: 40px 0;
    color: #313740;
    li{
        display: inline-block;
        padding: 0px 10px;
        margin: 0px 10px;
    }
    position: fixed;
    top: 90px;
    left: 10%;
    right: 10%;
	// left: 0;

    @media (min-width: 700px) {
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
    padding: 0;
    margin: 10px 0;
    color: #333;
    &:hover ${Social}{
        padding: 5px;
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