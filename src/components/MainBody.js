import React, { Component, createRef } from 'react'
import firstMainState from '../js/firstMainState'
import makeServerUpdate from '../js/makeServerUpdate'
import MyUserinput from './MyUserinput'
import showResult from '../js/showResult'
import MyEmotionPic from './MyEmotionPic'
import DisplayPart from './DisplayPart'
import ShowResults from './ShowResult'
import showMessages from '../js/showMessages'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap'
import urlFile from '../url.json'

export class MyBody extends Component {
    //The file where almost everything happens used from App.js as MyBody
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleResultButton = this.handleResultButton.bind(this)
        this.state = firstMainState //in js Folder
        this.divMref = createRef(false)
    }

    componentDidMount() {
        //To start the first messanges from server send 'start'
        this.sendMessageToServer('start')
        this.ShowMessages = new showMessages((a) => { this.setState(a) }, this.divMref.current)
        console.log(this.props.match.params)
        if(this.props.match.params.id && this.props.match.params.v){
            this.props.setWithFooter(false)
            this.setState((old) => {
                const newState = old
                const pers = this.props.match.params.v === 'b5a' ? 0:1
                newState.toServer.informationPackage = Object.assign(old.toServer.informationPackage, 
                    {uid:this.props.match.params.id,pers:!!pers})
                return newState
            })
        }
        if(this.props.match.params.v === 'b5a' ){
            document.body.style.backgroundImage = 'none'
            document.body.style.backgroundColor = 'gray'
        }
    }

    async sendMessageToServer(mes) {
        //Send the user messange together with the informationPack to the server only for componentDidMount (i think)
        if (!mes) { return }
        const updateState = async () => {
            this.setState((old) => {
                const newState = old
                newState.toServer.message = mes
                return newState
            })
        }
        await updateState()

        //in file /js/makeServerUpdate.js
        makeServerUpdate(this.state.toServer, (a) => { this.setState(a) }, this.ShowMessages)
    }

    async handleSubmit(e) {
        //handle click of the submit button
        e.preventDefault()
        const mes = this.state.textarea
        //check if something was written
        if (!mes) { return }
        //reset textarea und show messange in text
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

        //in file /js/makeServerUpdate.js
        await makeServerUpdate(this.state.toServer, (a) => { this.setState(a) }, this.ShowMessages)
        //check if something is spezial with this sate
        if (this.state.toServer.informationPackage.state === 'query') {
            //search for results
            this.setState(old => (Object.assign({}, old, { displayResult: true })))
            this.searchResults()
        }
        if (this.state.toServer.informationPackage.state === 'origincorr' || this.state.toServer.informationPackage.state === 'destinationcorr') {
            //change the input from textarea to TypeAhead
            this.setState(old => (Object.assign({}, old, { searchStation: true })))
        } else {
            this.setState(old => (Object.assign({}, old, { searchStation: false })))
        }
        if (this.state.toServer.informationPackage.state === 'or-again') {
            //reset all informations
            this.setState(old => Object.assign({}, old, { results: [], displayResult: false, refreshShowResult: !old.refreshShowResult }))
        }
    }


    handleInputChange(event) {
        //For controlled Inputs
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async searchResults() {
        //the function which searches for results
        this.setState(old => Object.assign({}, old, { results: false }))
        const url = urlFile.apiurl + '/request'
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
            //show the results from /js/showResult.js
            showResult(json, (a) => { this.setState(old => Object.assign({}, old, { results: a, refreshShowResult: !old.refreshShowResult })) })
        }
        catch{
            this.setState(old => Object.assign({}, old, { results: "Fehler" }))
        }
    }

    async handleResultButton(event) {
        //handle result button used from DisplayPart.js
        if (this.state.displayResult === false) {
            this.searchResults()
            this.setState(old => (Object.assign({}, old, { displayResult: true, refreshShowResult: !old.refreshShowResult })))
        } else {
            this.setState(old => (Object.assign({}, old, { displayResult: false })))
        }
    }

    render() {
        return (
            <Container>
                {this.state.toServer.informationPackage.pers ?
                <Row className="justify-content-md-center">
                    <Col xl={this.state.displayResult ? 6 : 12} lg={12}>
                        <MyEmotionPic emotion={this.state.emotion} />
                    </Col>
                    {this.state.displayResult ? <Col lg={12} xl={6}> </Col> : null}
                </Row>:
                <div style={{height:'100px'}}> </div>}
                <Row style={{ overflow: "hidden" }}>
                    <Col className="leftside" xl={this.state.displayResult ? 6 : 12} lg={12}>
                        <DisplayPart
                            messanges={this.state.messanges}
                            infos={this.state.toServer.informationPackage}
                            changeDisplayResult={this.handleResultButton}
                            divMrev={this.divMref}
                        />
                        <MyUserinput
                            handleSubmit={this.handleSubmit}
                            handleInputChange={this.handleInputChange}
                            textarea={this.state.textarea}
                            searchStation={this.state.searchStation} />
                    </Col>
                    {this.state.displayResult ?
                        <Col lg={12} xl={6}>
                            <ShowResults results={this.state.results} dest={this.state.toServer.informationPackage.destination} />
                        </Col> : null}
                </Row>
            </Container>
        )
    }
}

export default MyBody
