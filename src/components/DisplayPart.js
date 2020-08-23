import React, { Component } from 'react'
import MessageList from './MessageList'
import Button from 'react-bootstrap/Button'
import notizpic from '../pics/notiz.png'
import Figure from 'react-bootstrap/Figure'
import ShowInfos from './ShowInfos'
import { MessageListStyle, ButtonStyle } from '../js/styles'

export default class DisplayPart extends Component {
  //Used in MainBody.js as component for Buttons, infos and Messanges

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.state = {
      showMessanges: true,
    }
    this.myMessageContainerRef = React.createRef();
  }

  handleClick(event) {
    //handle the onClick event of ether the info or the resultbutten
    switch (event.target.name) {
      case ('resultButton'):
        console.log('restultbutton')
        this.props.changeDisplayResult() //Function in MainBody
        break
      case ('infoButton'):
        this.setState(old => ({ showMessanges: !old.showMessanges }))
        break
      default:
        break
    }
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    //Scroll to the right textposition when CatBot is chating
    let { scrollHeight, clientHeight, scrollTop } = this.myMessageContainerRef.current
    const maxScrollTop = scrollHeight - clientHeight;
    if (scrollTop > maxScrollTop - 320) {
      this.myMessageContainerRef.current.scrollTop = maxScrollTop
    }
  }

  render() {
    return (
      <div className="DisplayConatainer">
        <div className="ButtonContainer">
          {/*<Button name="resultButton" onClick={this.handleClick} style={ButtonStyle}><Figure.Image width={20}/></Button> */}
          <Button name="infoButton" onClick={this.handleClick} style={ButtonStyle}><Figure.Image name="infoButton" src={notizpic} width={20} /></Button>
        </div>
        <div className="BottomButtonContainer">
          <ShowInfos infos={this.props.infos} style={this.state.showMessanges ? { visibility: 'collapse' } : null} />
          <div className="MessageContainer" style={MessageListStyle} ref={this.myMessageContainerRef}>
            <MessageList messanges={this.props.messanges} divMref={this.props.divMrev} />
          </div>
        </div>
      </div>
    )
  }
}
