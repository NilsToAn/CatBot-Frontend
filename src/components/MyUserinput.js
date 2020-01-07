import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function MyUserinput(props) {
    return (
        <Form onSubmit={props.handleSubmit}> 
        <Form.Group className='text-left'>
            <Form.Label> Eingabe  </Form.Label>
            <Form.Control 
                onChange={props.handleInputChange}
                name="textarea"
                as="textarea" 
                rows="3" 
                value={props.textarea}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    )
}
