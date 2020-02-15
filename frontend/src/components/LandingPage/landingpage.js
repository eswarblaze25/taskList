import React from 'react';

class LandingPage extends React.Component{
  render() {
    return(
      <div>
        <ul>
          <li><a href="/about">About Page</a></li>
          <li><a href="/contactUs">Contact Us</a></li>
          <li><a href='/register'>Register</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>
        Landing Page
      </div>
    )
  }
}

export default LandingPage