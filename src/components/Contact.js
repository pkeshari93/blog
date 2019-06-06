import React, { Component, Fragment } from "react";
import styled from "styled-components";

const PageWarpper = styled.div`
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
`;

const PageTitle = styled.h1`
  font-size: 30px;
  display: block;
`;

const Form = styled.form``;

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    reason: ""
  };
  componentDidMount() {
    // console.log(this.state.name);
  }

  handleChange = event => {
    event.preventDefault();
    switch (event.target.id) {
      case "name":
        this.setState({
          name: event.target.value
        });
        console.log(this.state.name);
        break;
      default:
        break;
    }
    // if (event.target.id === "name") {
    //   this.setState({
    //     name: event.target.value
    //   });
    // }
  };

  render() {
    return (
      <PageWarpper>
        <PageTitle>Contact</PageTitle>
        <Form
        // action="https://formspree.io/pkeshari@mtu.edu"
        // method="POST"
        // target="_blank"
        >
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="firstname"
            placeholder="Your name.."
            onChange={this.handleChange}
          />
        </Form>
      </PageWarpper>
      // <Fragment>
      //   {/* <form
      //     action="https://formspree.io/pkeshari@mtu.edu"
      //     method="POST"
      //     target="_blank"
      //   >
      //     <label for="name">Name</label>
      //     {/* <input type="text" id="fname" name="firstname" placeholder="Your name..">

      //       <label for="email">Email</label>
      //       <input type="text" id="lname" name="email" placeholder="Your email..">

      //       <label for="message">Message</label>
      //       <textarea id="subject" name="subject" placeholder="Message.." style="height:80px"></textarea>

      //       <input type="submit" value="Submit"> */}
      //   </form>
      // </Fragment> */}
    );
  }
}
