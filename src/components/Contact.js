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

const Button = styled.input`
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
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  border-radius: 5px;
  background-color: #313740;
  color: #fff;
  font-family: Comfortaa;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 30px;
  resize: vertical;
`;

const Message = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  handleChange = event => {
    switch (event.target.id) {
      case "name":
        this.setState({
          name: event.target.value
        });
        break;
      case "email":
        this.setState({
          name: event.target.email
        });
      case "phone":
        this.setState({
          name: event.target.phone
        });
      case "message":
        this.setState({
          name: event.target.message
        });
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
          action="https://formspree.io/pkeshari@mtu.edu"
          method="POST"
          target="_blank"
        >
          <Input
            type="text"
            id="name"
            name="Name"
            placeholder="Your name..."
            onChange={this.handleChange}
          />

          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Your email..."
          />

          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your contact..."
          />

          <Message
            type="text"
            id="message"
            name="message"
            placeholder="I need to get in touch with you for..."
          />

          <Button type="submit" value="Submit" onCick={this.handleSubmit} />
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
