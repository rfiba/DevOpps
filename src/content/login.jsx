import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


const buttonStyle = {
  width: '200px',
  marginLeft: '17%',
  marginBottom: '10px'
 
}

const inputStyle = {
  width:'300px',
 
}

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

class Login extends Component {

    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        this.setState({
            res: stringifyFormData(data),
        });
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
    }

  render() {
    return (
        <login >

          {this.state.res && (
              <div>
                  {alert(this.state.res)}
              </div>
          )}
            <Container style={centerStyle}>
        <Form onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
              style = {inputStyle}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                style = {inputStyle}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
         
             <Button style ={buttonStyle} >Submit</Button>
        
            <Button style ={buttonStyle}  onClick  href="/register">Register</Button>
        
            
        </Form>
       
      </Container>
        </login>
    );
  }
}
function

stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

export default Login;