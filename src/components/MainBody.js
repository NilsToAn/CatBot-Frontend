import React, { Component, Fragment } from 'react'
import firstMainState from '../js/firstMainState'
import makeServerUpdate from '../js/makeServerUpdate'
import MyUserinput from './MyUserinput'
import showResult from '../js/showResult'
import MyEmotionPic from './MyEmotionPic'
import DisplayPart from './DisplayPart'
import ShowResults from './ShowResult'

export class MyBody extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleResultButton = this.handleResultButton.bind(this)
        this.state = firstMainState //in js Folder
    }

    async handleSubmit(e) {
        e.preventDefault()
        const mes = this.state.textarea
        if (!mes) { return }
        const updateState = async () => {
            this.setState((old) => {
                const newState = old
                newState.messanges.push({ text: mes, key: newState.messanges.length, user: true })
                newState.textarea = ""
                newState.toServer.message = mes
                return newState
            })
        }
        await updateState()

        //Anfrage
        makeServerUpdate(this.state.toServer, (a) => { this.setState(a) })
    }


    handleInputChange(event) {
        //console.log(event)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleResultButton(event) {
        //Result anfrage
        if (this.state.displayResult === false) {
            const url = 'http://localhost:8080/request'
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(this.state.toServer),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const json = await response.json()
                showResult(json, (a) => { this.setState(old => Object.assign({}, old, { results: a })) })
            }
            catch{

            }
        }
        this.setState(old => (Object.assign({}, old, { displayResult: !old.displayResult })))
    }

    render() {
        return (
            <Fragment>
                <MyEmotionPic emotion={this.state.emotion} />
                <div style={{ overflow: "hidden" }}>
                    <div style={{ width: this.state.displayResult ? "50%" : "100%", float: 'left' }}>
                        <DisplayPart
                            messanges={this.state.messanges}
                            infos={this.state.toServer.informationPackage}
                            changeDisplayResult={this.handleResultButton}
                        />
                        <MyUserinput
                            handleSubmit={this.handleSubmit}
                            handleInputChange={this.handleInputChange}
                            textarea={this.state.textarea}
                            searchStation={false} />
                    </div>
                    {this.state.displayResult ? <div style={{ float: "left", width: "50%" }}>
                        <ShowResults results={this.state.results} />
                    </div> : null}
                </div>
            </Fragment>
        )
    }
}

export default MyBody
