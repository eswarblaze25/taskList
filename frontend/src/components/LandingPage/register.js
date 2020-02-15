import React, {Component,} from 'react';
import {Card, CardBody, Form, FormGroup, Input, Button, Label } from 'reactstrap'

export default class Register extends Component {
  constructor(props){
    super(props)
      this.state = {

      }
    
  }
  render(){
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
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Enter the Name" required />
                </FormGroup>
                <FormGroup>
                  <Label for="email">email</Label>
                  <Input type="email" name="email" id="email" placeholder="Enter the Email" required />
                </FormGroup>
                <FormGroup>
                  <Label for="username"> User Name</Label>
                  <Input type="text" name="username" id="username" placeholder="Enter the User Name" required />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input type="tel" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" name="phone" id="phone" placeholder="enter the Phone Number" required />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="enter the Password" required />
                </FormGroup>
                <FormGroup>
                  <Label for="confrimPassword"> Confrim Password</Label>
                  <Input type="password" name="confrimPassword" id="confrimPassword" placeholder="Re-enter the Password to Confrim" required />
                </FormGroup>
                <FormGroup>
                  <Button color="primary" type="submit" >Register</Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
     </div>
    )
  }
}