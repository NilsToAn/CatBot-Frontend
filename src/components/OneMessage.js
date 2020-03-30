import React from 'react'
import PropTypes from 'prop-types'

export default function OneMessage (props) {
  console.log(props)
  const { text, user, droplet } = props.data
  return (
    <div className={`message ${droplet ? 'droplet' : null} ${user ? 'User' : 'Bot'}`}>
      <div className="message__text">
        <div className="message__text__content">{text}
          <div className="message__time">{}</div>
        </div>
      </div>
    </div>
  )
}

OneMessage.propTypes = {
  data: PropTypes.object
}
