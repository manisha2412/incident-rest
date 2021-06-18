import React from 'react';
import {Button, Container, Form, Row, Table} from 'react-bootstrap';
import axios from 'axios';
import {IAddNewIncident} from "../interface/IAddNewIncident";


export class NewIncident extends React.Component<{sendData:any}, IAddNewIncident> {
    constructor(props: any) {
        super(props);
        this.state = this.initialState();
    }

    initialState = () => {
        return (
            {
                description: "",
                incidentCategory: "",
                location: "",
                city: "",
                state: "",
                topic: ""
            }
        );
    }

    resetFormBuilder = () => {
        return this.setState(this.initialState());
    }

    onSubmit = async () => {
        console.log("inside", this.state)
        console.log("test-------", this.state.description);
        let newIncidentObj = {
            "description": this.state.description,
            "incidentCategory": this.state.incidentCategory,
            "topic": this.state.topic,
            "location": this.state.location,
            "state": this.state.state,
            "city": this.state.city
        }
        console.log("obj-------", newIncidentObj);

        await axios.post('http://localhost:8080/', newIncidentObj)
            .then((response) => {
                this.resetFormBuilder();
                //this.props.sendData(this.state.showTrainSchedule);

            }, (error) => {
                console.log(error);
            });

    };

    render() {

        return (
            <>
                <div align='center'>
                    <Container>
                        <Form>
                            <Table striped bordered hover cellspacing="25">
                                <tbody>
                                <tr>
                                    {/*<Form.Group controlId="formBasicEmail">*/}
                                    <td>
                                        <Form.Label>Incident Name</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Control className='text-input' type="text" placeholder="Enter topic"
                                                      value={this.state.topic}
                                                      onChange={e => this.setState({topic: e.target.value})}
                                        />
                                    </td>
                                    {/*</Form.Group>*/}
                                </tr>
                                <tr>
                                    {/*<Form.Group controlId="formBasicPassword">*/}
                                    <td>
                                        <Form.Label>Incident Category</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Control className='text-input' type="text" placeholder="Enter incident category"
                                                      value={this.state.incidentCategory}
                                                      onChange={e => this.setState({incidentCategory: e.target.value})}
                                        />
                                    </td>
                                    {/*</Form.Group>*/}
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Label>Description</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Control className='text-input' type="textarea" placeholder="Enter description"
                                                      value={this.state.description}
                                                      onChange={e => this.setState({description: e.target.value})}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Label>Location</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Control className='text-input' type="text" placeholder="Enter location of  incident"
                                                      value={this.state.location}
                                                      onChange={e => this.setState({location: e.target.value})}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                <td>
                                    <Form.Label>State</Form.Label>
                                </td>
                                <td>
                                    <Form.Control className='text-input' type="text" placeholder="Enter state"
                                                  value={this.state.state}
                                                  onChange={e => this.setState({state: e.target.value})}
                                    />
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <Form.Label>City</Form.Label>
                                </td>
                                <td>
                                    <Form.Control className='text-input' type="text" placeholder="Enter city"
                                                  value={this.state.city}
                                                  onChange={e => this.setState({city: e.target.value})}
                                    />
                                </td>
                            </tr>
                                </tbody>
                            </Table>
                        </Form>
                        <Row>

                            <Button variant="primary"
                                    type="submit"
                                    onClick={this.onSubmit}
                            >
                                Submit
                            </Button>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }

}

export default NewIncident;