import React, { Component } from "react";
import styled from "styled-components";
import media from "../styling/media";

const Container = styled.div`
  color: #313740;
  font-size: 15px;
  display: block;
  font-family: Comfortaa;
  position: fixed;
  background: white;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 5px;
`;
export default class Footer extends Component {
  render() {
    return (
      <Container>
        <h6>Built with React on WordPress REST API</h6>
        {"\u00A9"} {new Date().getFullYear()} Prakhar Keshari
      </Container>
    );
  }
}
