import React, { Component, Fragment } from 'react'
import firstMainState from '../js/firstMainState'
import makeServerUpdate from '../js/makeServerUpdate'
import MyUserinput from './MyUserinput'
import showResult from '../js/showResult'
import MyEmotionPic from './MyEmotionPic'
import DisplayPart from './DisplayPart'
import ShowResults from './ShowResult'
import showMessages from '../js/showMessages'

export class MyBody extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleResultButton = this.handleResultButton.bind(this)
        this.state = firstMainState //in js Folder
        this.apiurl = 'http://localhost:8080'
        this.ShowMessages = new showMessages((a) => { this.setState(a) })
        //this.apiurl =  'http://travel-catbot.de:8080'
    }

    componentDidMount(){
        this.sendMessageToServer('start')
        console.log(window.location.href)
    }
    
    async sendMessageToServer(mes){
        if (!mes) { return }
        const updateState = async () => {
            this.setState((old) => {
                const newState = old
                newState.toServer.message = mes
                return newState
            })
        }
        await updateState()

        //Anfrage
        makeServerUpdate(this.state.toServer, (a) => { this.setState(a) },  this.ShowMessages)
    }

    async handleSubmit(e) {
        e.preventDefault()
        const mes = this.state.textarea
        if (!mes) { return }
        const updateState = async () => {
            this.setState((old) => {
                const newState = old
                this.ShowMessages.showUserMessage(mes)
                newState.textarea = ""
                newState.toServer.message = mes
                return newState
            })
        }
        await updateState()

        //Anfrage
        await makeServerUpdate(this.state.toServer, (a) => { this.setState(a) }, this.ShowMessages)
        console.log(this.state.toServer.informationPackage.state)
        if(this.state.toServer.informationPackage.state === 'query'){
            await this.searchResults()
            this.setState(old => (Object.assign({}, old, { displayResult: true })))
        }
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

    async searchResults(){
        const url = this.apiurl+'/request'
        console.log('search startet', url)
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

    async handleResultButton(event) {
        //Result anfrage
        if (this.state.displayResult === false) {
            this.searchResults()
            this.setState(old => (Object.assign({}, old, { displayResult: true })))
        }else{
            this.setState(old => (Object.assign({}, old, { displayResult: false })))
        }
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
