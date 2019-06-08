import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #313740;
  font-size: 20px;
  padding: 20px;
  margin-top: 200px;
  font-size: 20px;
  display: block;
  font-family: Comfortaa;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
export default class Footer extends Component {
  render() {
    return (
      <Container>
        {"\u00A9"} {new Date().getFullYear()} Prakhar Keshari
      </Container>
    );
  }
}
