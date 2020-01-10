import React, { Component, Fragment} from 'react'
import MessageList from './MessageList'
import Button from 'react-bootstrap/Button'
import notizpic from '../pics/notiz.png'
import Figure from 'react-bootstrap/Figure'
import ShowInfos from './ShowInfos'


export default class DisplayPart extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            showMessanges: true
        }
    }


    handleClick(event){
        this.setState(old => ({showMessanges: !old.showMessanges}))
    }
    render() {
        return (
            <Fragment>
            <div  style={{overflow: 'hidden'}}>
                <div style={{float:"right"}}>
                    <Button className='text-right'  onClick={this.handleClick}><Figure.Image src={notizpic} width={20}/></Button>
                </div>
                <div style={{clear: "right"}}>
                    {this.state.showMessanges?<MessageList messanges={this.props.messanges} />:<ShowInfos infos={this.props.infos} />}
                </div>
            </div>
            </Fragment>
        )
    }
}
