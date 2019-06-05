import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const SpinnerComponent = styled(FontAwesomeIcon)`
  font-size: 100px;
  animation: App-logo-spin infinite 3s linear;
`;

export const Spinner = ({ isLoading, children }) =>
  isLoading ? (
    <SpinnerComponent icon={faSpinner} />
  ) : (
    <Fragment>{children}</Fragment>
  );
