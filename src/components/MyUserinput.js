import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
//import 'react-bootstrap-typeahead/css/Typeahead.css';


export default function MyUserinput(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (name) => {
        setIsLoading(true);

        fetch('http://localhost:8080/autofill', {
            method: "POST",
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then(res => {
                setOptions(res);
                setIsLoading(false);
            })
    }


    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group className='text-left'>
                <Form.Label> Eingabe  </Form.Label>
                {props.searchStation ?
                    <AsyncTypeahead
                        name="textarea"
                        id="async-example"
                        isLoading={isLoading}
                        labelKey="login"
                        minLength={3}
                        onSearch={handleSearch}
                        options={options}
                        placeholder="Suche nach Station"
                        dropup={true}
                        onChange={(e) => {
                            props.handleInputChange(
                                {
                                    target: { name: "textarea", type: "typeahead", value: e[0] },
                                }
                            )
                        }}
                        value={props.textarea}
                    />
                    :
                    <Form.Control
                        onKeyDown={(event) => { if (event.keyCode === 13) { props.handleSubmit(event); return false } }}
                        onChange={props.handleInputChange}
                        name="textarea"
                        as="textarea"
                        rows="3"
                        value={props.textarea} />}
            </Form.Group>
            <Button variant="primary" type="submit">
                Senden
        </Button>
        </Form>
    )

}
