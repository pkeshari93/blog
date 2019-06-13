import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Spinner } from "./Spinner";
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

// const Spinner = styled(FontAwesomeIcon)`
//   font-size: 100px;
//   animation: App-logo-spin infinite 3s linear;
// `;

const Img = styled.img`
  width: 30%;
  min-width: 200px;
  height: auto;
  margin: 20px;
  -o-box-shadow: 2px 2px 12px #555;
  -icab-box-shadow: 2px 2px 12px #555;
  -khtml-box-shadow: 2px 2px 12px #555;
  -moz-box-shadow: 2px 2px 12px #555;
  -webkit-box-shadow: 2px 2px 12px #555;
  box-shadow: 2px 2px 12px #555;
`;
const Content = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
  display: block;
  color: #313740;
  text-align: left;
  ul {
    list-style-type: circle;
  }
  h4 {
    font-size: 25px;
    font-weight: bold;
  }
  h6 {
    font-size: 20px;
    font-weight: bold;
  }
`;
const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      content: "",
      isLoading: true
    };
  }

  componentDidMount() {
    let aboutPage = "http://acodersodyssey.com/wp-json/wp/v2/pages?_embed";

    fetch(aboutPage)
      .then(response => response.json())
      .then(response => {
        this.setState({
          img: response[0].better_featured_image.media_details.sizes.medium,
          content: response[0].content.rendered
        });
      });
  }

  render() {
    return (
      <Container>
        <Spinner isLoading={this.state.img == "" || this.state.content == ""}>
          <PageTitle>About</PageTitle>
          <Hr />
          <Img src={this.state.img.source_url} />
          <Content
            dangerouslySetInnerHTML={{
              __html: this.state.content
            }}
          />
        </Spinner>
      </Container>
    );
  }
}
