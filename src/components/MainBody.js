import React, { Component, Fragment } from 'react'
import processResponse from '../js/prosessResponse'
import firstMainState from '../js/firstMainState'
import MessageList from './MessageList'
import MyUserinput from './MyUserinput'
import showMessages from '../js/showMessages'
import showResult from '../js/showResult'

export class MyBody extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = firstMainState //in js Folder
    }

   async handleSubmit(e) {
        e.preventDefault()
        const updateState = async () => {
            const mes = this.state.textarea
            this.setState((old) => {
                const newState = old

                newState.messanges.push({text: mes, key : newState.messanges.length, user: true})
                newState.textarea = ""
                newState.toServer.message = mes

                return newState
            })
        }
        await updateState()

        //Anfrage
        const url = 'http://localhost:8080'
        try{
            const response = await fetch(url ,{
                method: "POST",
                body: JSON.stringify(this.state.toServer),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            //Antwort
            const json = await response.json()
            //Verarbeitung
            const[informationPackage, answerPackege, resultPackage] = processResponse(json)
            showMessages(answerPackege, (a) => {this.setState(a)})
            showResult(resultPackage, (a) => {this.setState(a)})
            this.setState((old)=>{
                const newState = old
                newState.toServer.informationPackage = Object.assign(old.toServer.informationPackage,informationPackage)
                return newState
            })

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
            <Fragment>
                <MessageList messanges={this.state.messanges}/>
                <MyUserinput handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} textarea={this.state.textarea}/>
            </Fragment>
        )
    }
}

export default MyBody
