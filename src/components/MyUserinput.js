import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
//import 'react-bootstrap-typeahead/css/Typeahead.css';
import { UserInputSytle, ButtonStyle } from '../js/styles'
import urlFile from '../url.json'


function MyUserinput(props) {
    //Renders the userInput textarea or TypeAhead and the submit Button used from MainBody.js
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (name) => {
        //handle the typeahead for origin and destination correction
        setIsLoading(true);
        fetch(urlFile.apiurl + '/autofill', {
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
                {props.searchStation ?
                    <AsyncTypeahead
                        name="textarea"
                        id="async-example"
                        isLoading={isLoading}
                        labelKey="login"
                        minLength={2}
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
                        style={UserInputSytle}
                        onKeyDown={(event) => { if (event.keyCode === 13) { props.handleSubmit(event); return false } }}
                        onChange={props.handleInputChange}
                        name="textarea"
                        as="textarea"
                        rows="3"
                        value={props.textarea}
                        placeholder="Eingabe"
                        className="UserTextarea"
                    />}
            </Form.Group>
            <Button variant="primary" type="submit" style={ButtonStyle}>
                Senden
        </Button>
        </Form>
    )

}

export default React.memo(MyUserinput)
