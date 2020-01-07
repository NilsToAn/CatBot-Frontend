import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function MessageList(props) {
    return (
        <ListGroup>
        {props.messanges.map((message) =>
            (<ListGroup.Item key={message.key} className='text-left'>
                {message.text}
        </ListGroup.Item>))}
    </ListGroup>
    )
}
