import React, { Component } from "react";
import styled from "styled-components";
import media from "../styling/media";
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

  ${media.phone`
    padding: 40px 5px;
	`}
`;

const PageTitle = styled.h1`
  font-size: 30px;
  display: block;
`;

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  render() {
    return (
      <Container>
        <PageTitle>Resume</PageTitle>
      </Container>
    );
  }
}
