import React, { Component, Fragment } from "react";
import { Link } from "react-router";
import BlogPost from "./BlogPost";
import styled from "styled-components";
import { Spinner } from "./Spinner";
import media from "../styling/media";

var dateFormat = require("dateformat");

// import PropTypes from 'prop-types';

const BlogDiv = styled.div`
  background: #fff;
  padding: 10px 5%;
  padding-top: 150px;
  font-family: Comfortaa;
  color: #313740;
  line-height: 2;

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
const BlogTitle = styled.h2`
  font-size: 25px;
  padding: 0 10px;
  padding-bottom: 30px;
  display: block;
`;

const DateAuthor = styled.h3`
  font-size: 15px;
  padding-bottom: 2px;
  display: block;
  text-align: left;
`;
const Paragraph = styled.p`
  font-size: 18px;
  padding-bottom: 10px;
  display: block;
  color: #313740;
  // text-align: left;
`;

const PostItem = styled.div`
  padding: 35px 20px;
  padding-bottom: 0;
  overflow: hidden;
`;
export const Button = styled.button`
  background: #fff;
  border: solid #000 1px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: inline-block;
  float: center;
  font-size: 18px;
  a {
    color: #313740;
    padding: 10px;
  }
  &:hover ${Button} {
    transition: 0.6s;
    background: #333;
    a {
      color: #fff;
    }
  }
`;
const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;
export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
      isLoading: true
    };
  }

  componentDidMount() {
    let blogPostUrl = "http://acodersodyssey.com/wp-json/wp/v2/posts?_embed";

    // fetching the promise
    fetch(blogPostUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({
          blogPosts: response
        });
      });
  }

  render() {
    let blogPosts = this.state.blogPosts.map((blogPost, index) => {
      let date = new Date(blogPost.date_gmt);
      let myDate = dateFormat(date, "longDate");
      return (
        <Fragment key={index}>
          <PostItem>
            <BlogTitle>{blogPost.title.rendered}</BlogTitle>
            {/* <DateTag>{myDate}</DateTag> */}
            <div>
              {blogPost.better_featured_image ? (
                // console.log(blogPost.better_featured_image)
                <img
                  src={
                    blogPost.better_featured_image.media_details.sizes.thumbnail
                      .source_url
                  }
                />
              ) : (
                ""
              )}
            </div>

            <Button>
              <Link to={"post/" + blogPost.id}>Read Me</Link>
            </Button>
            <DateAuthor>
              Penned by, {blogPost._embedded.author[0].name}
            </DateAuthor>
            <DateAuthor>{myDate}</DateAuthor>
          </PostItem>
          <Hr />
        </Fragment>
      );
    });
    return (
      <BlogDiv>
        <Spinner isLoading={this.state.blogPosts.length === 0}>
          <PageTitle>Articles</PageTitle>
          <Hr />
          {blogPosts}
        </Spinner>
      </BlogDiv>
    );
  }
}
