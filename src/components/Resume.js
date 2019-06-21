import React, { Component } from "react";
import styled from "styled-components";
import media from "../styling/media";
import { Spinner } from "./Spinner";

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

const Exp = styled.div`
  width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;

const CompanyTitle = styled.h2`
  font-size: 25px;
  padding: 0 10px;
  padding-bottom: 30px;
  display: block;
  color: black;
`;

const Button = styled.button``;

const Img = styled.img`
  width: 40%;
  min-width: 200px;
  display: block;
  height: auto;
  margin: 20px;
  margin-left: 0;
`;

const Content = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
  display: block;
  line-height: 2;
  padding-top: 20px;
  text-align: left;
  h1 {
    font-size: 25px;
    font-weight: bold;
    color: #000;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    font-style: italic;
  }

  p {
    display: inline-block;
    font-size: 20px;
    padding-bottom: 10px;
    display: block;
    color: #313740;
  }

  a {
    color: blue;
  }
  ul {
    list-style-type: disc;
    font-size: 18px;
    font-weight: normal;
  }

  pre {
    display: block;
    text-align: center;
    color: #313740;

    img {
      width: 50%;
      height: auto;
      min-width: 250px;
      display: inline-block;
      padding: 50px;
      // filter: brightness(140%) contrast(100%) saturate(90%);
    }
  }
`;

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      open: false,
      expId: ""
    };
  }

  componentDidMount() {
    let aboutPage = "http://acodersodyssey.com/wp-json/wp/v2/experience?_embed";

    fetch(aboutPage)
      .then(response => response.json())
      .then(response => {
        this.setState({
          companies: response
        });
      });
  }

  handleClick(id) {
    if (id) {
      this.setState({
        open: !this.state.open,
        expId: id
      });
    }
  }

  render() {
    // console.log("companies", this.state.companies);
    return (
      <Container onClick={this.handleClick.bind(this)}>
        <Spinner isLoading={this.state.companies == ""}>
          <PageTitle>Resume</PageTitle>
          {this.state.companies
            .slice(0)
            .reverse()
            .map((company, index) => {
              return (
                <Exp key={index}>
                  {company.better_featured_image && (
                    <Img
                      src={
                        company.better_featured_image.media_details.sizes.medium
                          .source_url
                      }
                    />
                  )}

                  <Content
                    dangerouslySetInnerHTML={{
                      __html: company.content.rendered
                    }}
                  />
                  <Hr />
                </Exp>
              );
            })}
        </Spinner>
      </Container>
    );
  }
}
