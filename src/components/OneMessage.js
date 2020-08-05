import React from 'react'
import PropTypes from 'prop-types'

export default function OneMessage (props) {
  //console.log(props)
  const { text, user} = props.data
  return (
    <div className={`message ${user ? 'User' : 'Bot'}`}>
      <div className="message__text">
        <div className="message__text__content">
          {text} 
        </div>
      </div>
    </div>
  )
}

OneMessage.propTypes = {
  data: PropTypes.object
}
