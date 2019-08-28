import React, { Component, Link } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPen
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-css-only/css/bootstrap.css';

class SimpleCard extends Component {

    handleDelete = () => {
        //eslint-disable-next-line
        const confirmationPrompt = confirm(
            "Click OK if you wish to delete, cancel if you don't"
        );
        if (confirmationPrompt === true) {
            if (this.props.handleDelete) {
                this.props.handleDelete(this.props.id);
            }
        } else {
            alert('All is good, it was not deleted');
        }
    };

    handleEdit = () => {
        this.props.handleEdit(this.props.id);
    }

    showLink= (id) => {
        console.log(id);
        this.props.showLink(id);
    }
    
    render() {
        console.log(this.props);
        return (
            <Card style={{ width: '100%', marginBottom: '1em' }}>
                <Card.Body>
                    <Row>
                        <LinkContainer to={this.props.showLink(this.props.id) ? this.props.showLink(this.props.id) : `/${this.props.id}`} style={{ cursor: 'pointer' }} >
                            <Col xs={8} sm={10} md={10} lg={10} xl={10}>
                                
                                <Card.Title>
                                     {this.props.title}
                                </Card.Title>

                            </Col>
                            </LinkContainer>
                        <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                            <Card.Link>
                                <Button
                                    onClick={this.handleEdit}
                                    variant="outline-secondary"
                                    size="sm"
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </Button>
                            </Card.Link>
                        </Col>
                        <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                            <Card.Link>
                                <Button
                                    onClick={this.handleDelete}
                                    variant="outline-secondary"
                                    size="sm"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </Card.Link>
                        </Col>
                    </Row>
                        <Row>
                            <Col xs={10} sm={11} md={11} lg={11} xl={11}>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {this.props.description}
                                </Card.Subtitle>
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default SimpleCard;