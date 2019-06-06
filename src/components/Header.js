import React, { Component } from "react";
import { Link } from "react-router";
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
		h1{
			float: left;
			font-size: 25px;
		}
		li{
			margin: 0px 10px;
			font-size: 15px;
		}
	`}

	

	
`;
const Logo = styled.h1`
  display: inline-block;
  float: left;
  font-family: Sacramento;
`;

const Nav = styled.nav`
  display: inline-block;
`;

const List = styled.li`
  display: inline-block;

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
`;
export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo>A Coder's Odyssey</Logo>
        <Nav>
          <ul style={{ padding: "none" }}>
            <List>
              <Link to="/blog">blog</Link>
            </List>
            <List>
              <Link to="/about">about</Link>
            </List>
          </ul>
        </Nav>
      </Container>
    );
  }
}
