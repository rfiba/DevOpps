import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup,ButtonGroup, Label, Input,
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


class Register extends Component {

    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        this.setState({
            res: stringifyFormData(data),

        });
    }

    render() {
        return (
            <register >
                {this.state.res && (
                    <div>
                        {alert(this.state.res)}
                    </div>
                )}
                <Container style = {centerStyle}>
                    <Form onSubmit={this.handleSubmit} >
                        <Col>
                            <FormGroup>
                                <Label>User Name</Label>
                                <Input
                                    style = {inputStyle}
                                    type="text"
                                    name="userName"
                                    id="exampleUserName"
                                    placeholder="Your Nick Name"
                                />
                            </FormGroup>
                        </Col>
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
                        <Col>
                        <FormGroup>
                            {/*<Label for="userRights">Kryterium</Label>*/}
                                <Input
                                    style = {inputStyle}
                                    type="radio"
                                    id="student"
                                    name="rights"
                                    value="Student"
                                    checked={this.state.rSelected === 1}
                                />
                                <Input
                                    style = {inputStyle}
                                    type="radio"
                                    id="prowadzacy"
                                    name="rights"
                                    value="Prowadzacy"
                                    checked={this.state.rSelected === 2}
                                />
                            <ButtonGroup>
                                <Button size="sm" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Student</Button>
                                <Button size="sm" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Prowadzacy</Button>
                            </ButtonGroup>
                        </FormGroup>
                        </Col>
                         <Button style = {buttonStyle}>Register</Button>
                        <Button style = {buttonStyle} onClick  href="/login">Back To Login</Button>

                    </Form>
                   
                </Container>
                 
            </register>
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



export default Register;