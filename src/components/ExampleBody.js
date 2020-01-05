import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import processResponse from '../js/prosessResponse'

export class MyBody extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state={
            messanges:[
                {text: "ersetns"}
            ],
            toServer:{
                username:"Felix", //name of the user
                message:"Hallo du Arsch. Wie gehts?", //current input
                informationPackage:
                {
                    origin: ["Bochum"], //can be multiple citys, extra field for auto-complet via js-req
                    destination: [], //see origin
                    date: [2020,1,1], //only one date, can be changed via interace and after request-done
                    time: [], //see date
                    traveller: 1, 
                    budget: 0,
                    transfers: 0,
                    requestDone: false, //bool, after true, fields can be overriden via nlu
                    jsRequest: ["open-window-for-dest", "open-window-for-origin"], //sets extra windows for autocomplte
                    state: "" //if users input can be inferred due to questions
                }
            }
        }
    }

   async handleSubmit(e) {
        e.preventDefault()
        const updateState = async () => {
            let mes = this.state.textarea
            this.setState((old) => (old.messanges.push({text: mes})))
            this.setState((old) => {
                const newState = old
                newState.toServer.message = mes
                return newState
            })
            this.setState({textarea:""})
        }
        await updateState()
        const url = 'http://localhost:8080'

        try{
            const response = await fetch(url ,{
                method: "POST",
                body: JSON.stringify(this.state.toServer),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json()
            console.log(json)
            processResponse(json)
        }
        catch(error){

        }
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
                        (<ListGroup.Item key={message.text} className='text-left'>
                            {message.text}
                    </ListGroup.Item>))}
                </ListGroup>
                <Form onSubmit={this.handleSubmit}> 
                    <Form.Group className='text-left'>
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
