import logo from '../img/logo_project.png';
import React from 'react';


import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroupAddon,
    Button,
    InputGroup,
    Input
} from 'reactstrap';

const navBarStyle = {
    background: "rgba(0, 0, 102, 0.7)",
    marginBottom: "50px"
};

const textColor = {
    color: "#ffffff",
};


const inputWidth = {
    width: "30%",

};

const imgDimension = {
    width: '150px',
    height: '50px'
};



export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar style={navBarStyle} light expand="md">
                    <NavbarBrand className="container-fluid" href="/main"><img src={logo} alt={"logo"}
                                                                           style={imgDimension}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>

                    <InputGroup style={inputWidth}>
                        <Input type="" />
                        <InputGroupAddon addonType="append" >
                            <Button className="btn-success"  onClick={() => {  window.confirm('In progress') }}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={textColor} href="/main">Main</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} href="/search">Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} href="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} href="/profile">Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

