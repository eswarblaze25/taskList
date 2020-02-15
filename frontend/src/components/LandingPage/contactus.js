import React, {Component} from 'react';

export default class ContactUs extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <ul>
          <li><a href="/about">About Page</a></li>
          <li><a href="/contactUs">Contact Us</a></li>
          <li><a href='/register'>Register</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>
        contact me
      </div>
    )
  }
}