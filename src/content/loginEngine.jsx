import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';



class LoginEngine extends Component {

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
        <loginEngine className="loginEngine">

          {this.state.res && (
              <div>
                  {alert(this.state.res)}
              </div>
          )}
            <Container className="App">
        <Form onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
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
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
         <Button onClick  href="/register">Register</Button>
      </Container>
        </loginEngine>
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

export default LoginEngine;