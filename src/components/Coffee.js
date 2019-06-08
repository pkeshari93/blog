import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import media from "../styling/media";

const Quote = styled.div`
  display: block;
  width: 600px;
  font-size: 30px;
  font-family: Comfortaa;
  padding: 0.2em 0.5em;
  font-weight: bold;
  color: #313740;
  margin-left: auto;
  margin-right: auto;
  ${media.phone`
    font-size: 18px;
    width: 100%;
	`}
`;

const Wrapper = styled.div`
  display: block;
  height: 50vw;
`;

const CoffeeWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  position: relative;
  display: block;
  padding-top: 130px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  ${media.phone`
    width: 200px;
    height: 200px;
	`}
`;

const CoffeeMug = styled(FontAwesomeIcon)`
  font-size: 200px;
  position: absolute;
  left: 10%;
  top: 45%;
  color: black;
  ${media.phone`
    font-size: 150px;
    left: 7%;
    top: 50%;
	`}
`;
const Ul = styled.ul`
  position: absolute;
  bottom: 0;
  left: 41%;
  top: 60%;
  transform: translate(-50%);
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const animateEven = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
    filter: blur(5px);
  }
  100% {
    transform: translate(100px, -500px) scale(3);
    opacity: 1;
    filter: blur(10px);
  }
`;

const animateOdd = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
    filter: blur(5px);
  }
  100% {
    transform: translate(-100px, -500px) scale(3);
    opacity: 1;
    filter: blur(10px);
  }
`;

const Li = styled.li`
  position: fixed;
  width: 50px;
  height: 50px;
  ${media.phone`
    width: 30px;
    height: 30px;
	`}
  border-radius: 30%;
  background: #d9d9db;
  list-style: none;
  &:nth-child(10) {
    animation: none !important;
    filter: blur(50px);
  }
  &:nth-child(9) {
    animation: none !important;
    filter: blur(50px);
  }
  &:nth-child(even) {
    animation: ${animateEven} 8s linear infinite;
  }

  &:nth-child(odd) {
    animation: ${animateOdd} 8s linear infinite;
  }
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
  &:nth-child(4) {
    animation-delay: 1.2s;
  }
  &:nth-child(5) {
    animation-delay: 1.6s;
  }
  &:nth-child(6) {
    animation-delay: 2s;
  }
  &:nth-child(7) {
    animation-delay: 2.4s;
  }
  &:nth-child(8) {
    animation-delay: 2.8s;
  }
`;

export default class Blog extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <CoffeeWrapper>
            <Ul>
              <Li />
              <Li />
              <Li />
              <Li />
              <Li />
              <Li />
              <Li />
              <Li />
              <Li />
              <Li />
            </Ul>
            <CoffeeMug icon={faCoffee} />
          </CoffeeWrapper>
          <Quote>You give me Coffee I give you Code</Quote>
        </Wrapper>
      </Fragment>
    );
  }
}
