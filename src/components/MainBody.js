import React, { Component, createRef} from 'react'
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
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleResultButton = this.handleResultButton.bind(this)
        this.state = firstMainState //in js Folder
        this.divMref = createRef(false)
        console.log(urlFile.apiurl)
    }

    componentDidMount(){
        this.sendMessageToServer('start')
        this.ShowMessages = new showMessages((a) => { this.setState(a) }, this.divMref.current)
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
        if(this.state.toServer.informationPackage.state === 'query'){
            this.setState(old => (Object.assign({}, old, { displayResult: true })))
            this.searchResults()
        }
        if(this.state.toServer.informationPackage.state === 'origincorr' || this.state.toServer.informationPackage.state === 'destinationcorr' ){
            this.setState(old => (Object.assign({}, old, { searchStation: true })))
        }else{
            this.setState(old => (Object.assign({}, old, { searchStation: false })))
        }
        if(this.state.toServer.informationPackage.state === 'or-again'){
            this.setState(old => Object.assign({}, old, { results: [], displayResult: false, refreshShowResult: !old.refreshShowResult } ))
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

    async searchResults(){
        console.log('starte suche')
        this.setState(old => Object.assign({}, old,{results:[]}))
        const url = urlFile.apiurl+'/request'
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
                showResult(json, (a) => { this.setState(old => Object.assign({}, old, { results: a , refreshShowResult: !old.refreshShowResult})) })
            }
            catch{

            }
    }

    async handleResultButton(event) {
        //Result anfrage
        if (this.state.displayResult === false) {
            this.searchResults()
            this.setState(old => (Object.assign({}, old, { displayResult: true, refreshShowResult: !old.refreshShowResult})))
        }else{
            this.setState(old => (Object.assign({}, old, { displayResult: false })))
        }
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={ this.state.displayResult ? 6 : 12} lg={12}>
                        <MyEmotionPic emotion={this.state.emotion} />
                    </Col>
                    {this.state.displayResult ? <Col lg={12} xl={6}> </Col> : null}
                </Row>
                <Row style={{ overflow: "hidden" }}>
                    <Col className="leftside" xl={ this.state.displayResult ? 6 : 12} lg={12}>
                        <DisplayPart
                            messanges={this.state.messanges}
                            infos={this.state.toServer.informationPackage}
                            changeDisplayResult={this.handleResultButton}
                            divMrev = {this.divMref}
                        />
                        <MyUserinput
                            handleSubmit={this.handleSubmit}
                            handleInputChange={this.handleInputChange}
                            textarea={this.state.textarea}
                            searchStation={this.state.searchStation} />
                    </Col>
                    {this.state.displayResult ? 
                    <Col lg={12} xl={6}>
                        <ShowResults results={this.state.results} dest={this.state.toServer.informationPackage.destination}/>
                    </Col> : null}
                </Row>
            </Container>
        )
    }
}

export default MyBody
