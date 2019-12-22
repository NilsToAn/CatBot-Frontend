import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

export class MyBody extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state={
            messanges:[
                {text: "ersetns"}
            ]
        }
    }

   handleSubmit(e) {
        e.preventDefault()
        this.setState((old) => (old.messanges.push({text: this.state.textarea})))
        this.setState({textarea:""})
        fetch(`http://localhost:8080/${this.state.textarea}`)
        .then(response => response.json())
        .then(data => this.setState(old => {old.messanges.push({text: data["Request"]})}))

    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    render() {
        return (
            <div>
                <ListGroup>
                    {this.state.messanges.map(message =>
                        (<ListGroup.Item>
                            {message.text}
                    </ListGroup.Item>))}
                </ListGroup>
                <Form onSubmit={this.handleSubmit}> 
                    <Form.Group>
                        <Form.Label> Eingabe  </Form.Label>
                        <Form.Control 
                            onChange={this.handleInputChange}
                            name="textarea"
                            as="textarea" 
                            rows="3" 
                            value={this.state.textarea}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default MyBody
