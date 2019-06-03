import React, { Component } from "react";
import styled from "styled-components";
import media from "../styling/media";
var FontAwesome = require("react-fontawesome");

const Container = styled.div`
    ${media.desktop`
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 225px;
        height: auto;
        background: #fff;
        border-radius: 10px;
        color: #313740;
        ul{
            display: inline-block;
        }
        ${Social}{
            display: block
        }
        padding: 0;
        a{
            color: #313740;                
            padding: 0 15px;
            font-size: 35px
            &:hover{     
                padding-left: 30px;
                padding-right: 0px;
                background: #000;
                border-radius: 5px;
                color: #fff;
                transition: .2s;
            }
        }
        // padding:  10px;        
        width: 52px;
        justify-content: space-around;
        position: fixed;
        top: 100px;
        left: 10px;
        right: 0;
    
    `}
    ${media.tablet`
        display: block;
        text-align: center;
        height: auto;
        background: #fff;
        border-radius: 10px;
        color: #313740;
        ul{
            display: inline-block;
        }
        ${Social}{
            display: block
        }
        padding: 0;
        a{
            padding: 0px 15px;
            font-size: 25px
        }
        padding: 2px 10px;        
        justify-content: space-around;
        position: fixed;
        top: 100px;
        left: 10px;
        right: 0;
        
	`}
    ${media.phone`
        display: block;
        text-align: center;
        width: 225px;
        height: 45px;
        background: #fff;
        border-radius: 10px;
        color: #313740;
        ul{
            display: inline-block;
        }
        position: fixed;
        top: 92%;
        left: 17%;
        margin: 0px;
        a{
            color: #313740;    
            font-size: 25px
            padding: 15px;
        }  
	`}
`;

const Social = styled.div`
  display: block;
  width: 50px;
  margin: 10px 0;
  color: #333;
  display: inline-block;
  text-decoration: none;
`;

const SocialMediaLinks = styled.a`
  color: #313740;
  padding: 0 15px;
  font-size: 35px;
  &:hover {
    padding-left: 40px;
    padding-right: 5px;
    background: #000;
    border-radius: 5px;
    color: #fff;
    transition: 0.2s;
  }
`;

export default class SocialMedia extends Component {
  render() {
    return (
      <Container>
        {/* <Connect>Connect with me</Connect> */}
        <Social>
          <SocialMediaLinks
            target="_blank"
            href="https://www.linkedin.com/in/prakhar-keshari-68163b84/"
          >
            <i className="fab fa-linkedin-in" />
          </SocialMediaLinks>
        </Social>
        <Social>
          <SocialMediaLinks
            target="_blank"
            href="https://github.com/pkeshari93"
          >
            <i className="fab fa-github-square" />
          </SocialMediaLinks>
        </Social>
        <Social>
          <SocialMediaLinks
            target="_blank"
            href="https://www.instagram.com/prakhar.odyssey/"
          >
            <i className="fab fa-instagram" />
          </SocialMediaLinks>
        </Social>
        <Social>
          <SocialMediaLinks
            target="_blank"
            href="https://www.facebook.com/keshari.prakhar"
          >
            <i className="fab fa-facebook-square" />
          </SocialMediaLinks>
        </Social>
      </Container>
    );
  }
}
