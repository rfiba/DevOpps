import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import pdf from '../pdf/Przewodnik_Ubuntu_14.04_LTS_Trusty_Tahr.pdf';
import img from '../img/book.jpg';
import { FaPen } from 'react-icons/fa';


const marginTop = {
    marginTop: '2rem',
};

const marginLeft = {
    marginLeft: '1rem'
};

const marginLeftToUl = {
    marginLeft: '1.5rem',
    marginTop: '2rem',
    paddingRight: '20px'
};

const nonMarginInRow = {
    marginLeft: '0px',
    marginRight: '0px'
}




class userPage extends Component {

    render() {
        return (
            <div>
                <Row style={nonMarginInRow}>
                    <Col xs="3">
                        <h5 style={marginLeft}>
                            Favourite books:
                        </h5>
                        <ul style={marginLeftToUl}>
                            <li>
                                Measurement
                                <Button close />
                            </li>
                            <li>
                                Euclid in the Rainforest
                                <Button close />
                            </li>
                            <li>
                                Four Colours Suffice
                                <Button close />
                            </li>
                        </ul>
                    </Col>
                    <Col xs="6" className="text-center">
                        <Row>
                            <Col xs="6">
                                <div>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src={img}
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle>Measurement</CardTitle>
                                            <CardSubtitle>Author: Paul Lockhart</CardSubtitle>
                                            <Button style={marginTop} href={pdf} target = "_blank">Read more</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs="6">
                                <div>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src={img}
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle>Euclid in the Rainforest</CardTitle>
                                            <CardSubtitle>Author: Joseph Mazur</CardSubtitle>
                                            <Button style={marginTop} href={pdf} target = "_blank">Read more</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs="6">
                                <div>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src={img}
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle> Four Colours Suffice</CardTitle>
                                            <CardSubtitle>Author: Robin Wilson</CardSubtitle>
                                            <Button style={marginTop} href={pdf} target = "_blank">Read more</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="3" >
                        <h5>
                            Personal data:
                        </h5>
                        <ul style={marginLeftToUl}>
                            <li>
                                User Name: Piotr Adamczyk<FaPen class="right"/>
                            </li>
                            <li>
                                Email: adamczyk@gmail.com<FaPen class="right"/>
                            </li>
                            <li>
                                Member from: 15-10-2018<FaPen class="right"/>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default userPage;