/*  jshint esversion: 6 */
import React, { Component } from 'react'
// import logo from './logo.svg';
import Header from './Header'
import Footer from './Footer'
import SocialMedia from './SocialMedia'
import '../App.css'
import styled from 'styled-components'


class App extends Component {
  render(){
    return(
      <div>
        <div><Header /></div>
        <div><SocialMedia /></div>        
        <div>
          {this.props.children}
        </div>
        <div><Footer /></div>        
      </div>
    )
  }
}

export default App
