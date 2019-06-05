import React, { Component } from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
var dateFormat = require("dateformat");

const Container = styled.div`
  background: #fff;
  padding: 210px 5px;
  padding-bottom: 10px;
  font-family: Comfortaa;
  color: #313740;
  line-height: 2;
  overflow: hidden;

  @media (min-width: 700px) {
    padding: 130px 12%;
    padding-bottom: 10px;
  }
`;
const ArticleTitle = styled.h1`
  font-size: 25px;
  display: block;
  padding-bottom: 20px;
  font-weight: bold;
  font-color: #000;
`;

const DateAuthor = styled.h3`
  font-size: 12px;
  padding-bottom: 2px;
  display: block;
  text-align: center;
  color: #555;
`;
const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
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
    font-size: 22px;
    font-weight: bold;
    color: #000;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }

  p {
    display: inline-block;
    font-size: 18px;
    padding-bottom: 10px;
    display: block;
    color: #313740;
  }

  a {
    color: red;
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
      text-align: center;
      // filter: brightness(140%) contrast(100%) saturate(90%);
    }
  }
`;
export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        date: new Date(),
        title: "",
        content: "",
        author: "",
        image: ""
      }
    };
  }

  componentDidMount() {
    let postUrl =
      "http://acodersodyssey.com/wp-json/wp/v2/posts/" +
      this.props.params.id +
      "?_embed";
    console.log(postUrl);
    fetch(postUrl)
      .then(response => response.json())
      .then(response => {
        if (response.better_featured_image == null) {
          this.setState({
            post: {
              date: response.date_gmt,
              title: response.title,
              content: response.content,
              author: response._embedded.author[0].name,
              image: ""
            }
          });
        } else {
          this.setState({
            post: {
              date: response.date_gmt,
              title: response.title,
              content: response.content,
              author: response._embedded.author[0].name,
              image:
                response.better_featured_image.media_details.sizes.medium
                  .source_url
            }
          });
        }
      });
  }
  render() {
    let date = new Date(this.state.post.date);
    let myDate = dateFormat(date, "longDate");

    return (
      <Container>
        <div style={{ padding: "0 10px" }}>
          <ArticleTitle>{this.state.post.title.rendered}</ArticleTitle>
          <DateAuthor>Penned by, {this.state.post.author}</DateAuthor>
          <DateAuthor>{myDate}</DateAuthor>
          {/* <img style={{margin: "20px"}} src={this.state.post.image} /> */}
          <Hr />
          <Content
            dangerouslySetInnerHTML={{
              __html: this.state.post.content.rendered
            }}
          />
          <Hr />
        </div>
      </Container>
    );
  }
}
