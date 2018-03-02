/*  jshint esversion: 6 */
import React, { Component } from 'react'
// import logo from './logo.svg';
import Header from './Header'
import '../App.css'


class App extends Component {
  // constructor(){
  //   super()
  //   this.state={
  //     id: ''
  //   }
  // }
  render(){
    return(
      <div>
        <div><Header /></div>
        

        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
