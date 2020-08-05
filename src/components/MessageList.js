import React from 'react'
import PropTypes from 'prop-types'
import OneMessage from './OneMessage.js'
import '../css/ChatStyle.css'

export default function MessageList (props) {

  //console.log(props)
  return (
    <section className="chat__body">
      <div className="messages">
        {props.messanges.map((message) =>
          (<OneMessage key={message.key} data={{ user: message.user, text: message.text}}>
          </OneMessage>))}
      </div>
    </section>
  )
}

MessageList.propTypes = {
  messanges: PropTypes.array.isRequired
}
