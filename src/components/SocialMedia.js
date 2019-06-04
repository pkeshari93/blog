import React, { Component } from "react";
import styled from "styled-components";
import media from "../styling/media";
var FontAwesome = require("react-fontawesome");

const Container = styled.div`
    ${media.desktop`
        display: flex;
        flex-direction: column;
        text-align: center;
        height: auto;
        background: #fff;
        border-radius: 10px;
        color: #313740;
        ${Social}{
            display: block
        }
        padding: 0;
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
        ${Social}{
            display: block
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
  padding: 2px 15px;
  font-size: 30px;
  &:hover {
    padding-left: 40px;
    padding-right: 5px;
    background: #000;
    border-radius: 0 5px 5px 0;
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
