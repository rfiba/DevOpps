import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

const footerStyle = {
    width: "100%",
    height: "5%",
    background: "rgba(0, 0, 102, 0.7)",
    color: "white",
    marginBottom: '0px',
    marginTop: '30px',
    position: 'fixed',
    left: 0,
    bottom: 0,
};


class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContactForm: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleContactForm = this.toggleContactForm.bind(this);
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

    toggleContactForm() {
        this.setState({
            modalContactForm: !this.state.modalContactForm
        });
    }


    render() {
        return (
            <footer className="footer" style={footerStyle}>

                {this.state.res && (
                    <div>
                        {alert(this.state.res)}
                    </div>
                )}
                <span onClick={this.toggleContactForm}>Kontakt</span>

                <Modal isOpen={this.state.modalContactForm} toggle={this.toggleContactForm} className={this.props.className}>
                    <ModalHeader toggle={this.toggleContactForm}>Formularz kontaktowy</ModalHeader>
                    <ModalBody>
                        <Container>
                            <div className="text-center">
                                <form onSubmit={this.handleSubmit}>
                                    <Row >
                                        <Col>
                                           
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label htmlFor="username">Nazwa użytkownika</label>
                                            <input id="username" name="username" type="text" />
                                        </Col>
                                        <Col>
                                            <label htmlFor="email">E-mail</label>
                                            <input id="email" name="email" type="email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label htmlFor="message">Wiadomość</label>
                                            <input id="message" name="message" type="text" /> <br />
                                            <button className="btn-outline-primary">Wyślij wiadomość</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Container>

                    </ModalBody>
                    
                </Modal>

            </footer>
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


export default Footer;
