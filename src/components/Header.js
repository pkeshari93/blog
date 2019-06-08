import React, { Component } from "react";
import { Link } from "react-router";
import HamburgerMenu from "react-hamburger-menu";
import "../stylesheets/header.css";
import styled from "styled-components";
import media from "../styling/media";
// var React = require('react');
var FontAwesome = require("react-fontawesome");

const Container = styled.div`
	width: 100%;
	height: auto;
	background: #fff;
	color: #1F2329;
	position: fixed;
	left: 0;
	top: 0;
	display: flex
	justify-content: space-between;
	
	${media.desktop`
		padding: 12px 0px;
		li{
			margin: 0px 10px;
			font-size: 25px;
		}
	`}

	${media.tablet`
		padding: 12px 0px;
		h1{
			padding: 0 10px;
			float: left;
			font-size: 40px;
		}
		li{
			margin: 0px 10px;
			font-size: 25px;
		}
	`}
	
	${media.phone`
		padding: 5px 5px;
		position: relative;
		width: 95%;
	`}

	

	
`;
const Logo = styled.div`
  ${media.desktop`
		display: inline-block;
  	float: left;
		font-family: Sacramento;
		padding: 0 10px;
		float: left;
		font-size: 40px;
	`}
  ${media.phone`
		display: block;
		padding: 5px 0;
		font-size: 20px;
		width: 150px;
	`}
`;

const overlay = styled.div``;

const Nav = styled.nav`
  display: block;
  ${media.phone`
		width: 100vw;
		height: 100vh;
		display: ${props => (props.open ? "block" : "none")};
		position: absolute;
		top:0;
		left: 0;
		background: rgba(31, 35, 41, .95);
		z-index: 99;
	`}
`;

const StyledHamburgerMenu = styled.div`
  position: relative;
  z-index: 100 !important;
  display: none;
  ${media.phone`
		display: block;
	`}
`;

const StyledUl = styled.ul`
  display: block;
  ${media.phone`
		margin-top: 100px;
	`}
`;

const List = styled.li`
  display: inline-block;
  position: relative;
  backgorund: #fff;
  font-family: Comfortaa;
  a {
    text-decoration: none;
    display: inline-block;
    color: #1f2329;
    transition: 0.2s;
  }

  padding: 5px 5px;

  &:hover ${List} {
    background: #1f2329;
    transition: 0.2s;
    a {
      color: #fff;
    }
  }
  ${media.phone`
		display: block;
		font-size: 30px;
		padding: 10px 0;
		a{
			color: #fff;
		}
	`}
`;
export default class Header extends Component {
  state = {
    open: false
  };
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Container>
        <Logo>A Coder's Odyssey</Logo>
        <Nav open={this.state.open}>
          <StyledUl
            onClick={this.handleClick.bind(this)}
            style={{ padding: "none" }}
          >
            <List>
              <Link to="/home">home</Link>
            </List>
            <List>
              <Link to="/blog">blog</Link>
            </List>
            <List>
              <Link to="/about">about</Link>
            </List>
            <List>
              <Link to="/contact">contact</Link>
            </List>
          </StyledUl>
        </Nav>
        <StyledHamburgerMenu>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color={this.state.open ? "white" : "black"}
            borderRadius={0}
            animationDuration={0.5}
          />
        </StyledHamburgerMenu>
      </Container>
    );
  }
}
