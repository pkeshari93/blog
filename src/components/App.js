/*  jshint esversion: 6 */
import React, { Component } from "react";
// import logo from './logo.svg';
import Header from "./Header";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";
import "../App.css";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const AppWrap = styled.div`
  position: relative !important;
  height: 100vh;
  width: 100vw;
  orientation: portrait !important;
`;

class App extends Component {
  render() {
    return (
      <AppWrap>
        <Header />

        <div>{this.props.children}</div>
        <SocialMedia />
        <Footer />
      </AppWrap>
    );
  }
}

export default App;
