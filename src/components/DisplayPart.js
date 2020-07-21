import React, { Component, Fragment } from 'react'
import MessageList from './MessageList'
import Button from 'react-bootstrap/Button'
import notizpic from '../pics/notiz.png'
import Figure from 'react-bootstrap/Figure'
import ShowInfos from './ShowInfos'
import {MessageListStyle, ButtonStyle} from '../js/styles' 

export default class DisplayPart extends Component {

  

  constructor (props) {
    super(props)
    this.messagesEndRef = React.createRef()
    this.handleClick = this.handleClick.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.state = {
      showMessanges: true
    }
  }

  handleClick (event) {
    switch (event.target.name) {
      case ('resultButton'):
        console.log('restultbutton')
        this.props.changeDisplayResult()
        break
      case ('infoButton'):
        this.setState(old => ({ showMessanges: !old.showMessanges }))
        break
      default:
        break
    }
  }
  
  componentDidUpdate () {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    this.messagesEndRef.current && this.messagesEndRef.current.scrollIntoView()
  }

  render () {
    return (
      <Fragment>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ float: 'right' }}>
            <Button name="resultButton" onClick={this.handleClick} style={ButtonStyle}><Figure.Image width={20}/></Button>
            <Button name="infoButton" onClick={this.handleClick} style={ButtonStyle}><Figure.Image name="infoButton" src={notizpic} width={20}/></Button>
          </div>
          <div className="MessageContainer" style={MessageListStyle}>
            {this.state.showMessanges ? <MessageList messanges={this.props.messanges} lastRef={this.messagesEndRef}/> : <ShowInfos infos={this.props.infos} />}
          </div>
        </div>
      </Fragment>
    )
  }
}
