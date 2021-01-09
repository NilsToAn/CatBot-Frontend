import React from 'react'
import PropTypes from 'prop-types'
import OneMessage from './OneMessage.js'
import '../css/ChatStyle.css'

export default function MessageList (props) {
  //Used from DisplayPart.js to show all messanges with styling from /css/ChatStyle.css
  return (
    <section className="chat__body">
      <div className="messages" ref={props.divMref}>
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
