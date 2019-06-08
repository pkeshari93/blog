import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const SpinnerDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 99;
`;
export const SpinnerComponent = styled(FontAwesomeIcon)`
  font-size: 100px;
  color: black !important;
  animation: App-logo-spin infinite 3s linear;
  margin-top: 65%;
`;

export const Spinner = ({ isLoading, children }) =>
  isLoading ? (
    <SpinnerDiv>
      <SpinnerComponent icon={faSpinner} />
    </SpinnerDiv>
  ) : (
    <Fragment>{children}</Fragment>
  );
