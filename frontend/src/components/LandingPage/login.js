import React , { Component } from 'react';
import {Card, CardBody, Form, FormGroup, Label, Input, Button }  from 'reactstrap'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>   
        <div>
          <ul>
            <li><a href="/about">About Page</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
            <li><a href='/register'>Register</a></li>
            <li><a href='/login'>Login</a></li>
          </ul>
        </div>
     
        <div>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="username">UserName or Email </Label>
                  <Input name="username" id="username"  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}