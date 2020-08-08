import React from 'react'
import PropTypes from 'prop-types'

export default function OneMessage (props) {
  //console.log(props)
  let link = ""
  let replacement = ""
  let { text, user} = props.data
  const linkParts1 = text.split('}')
  if (linkParts1.length === 2) {
      const linkparts2 = linkParts1[0].split('{')
      if( linkparts2.length === 2){
         link = linkparts2[1]
         const replPart1 = linkParts1[1].split(']')
         if(replPart1.length === 1){
           text = linkparts2[0]
           replacement = replPart1[0].substring(1)
         }else if(replPart1.length === 2){
            text = linkparts2[0]
            replacement = replPart1[0].substring(1)
         }
      }
  }



  return (
    <div className={`message ${user ? 'User' : 'Bot'}`}>
      <div className="message__text">
        <div className="message__text__content">
          {text}
          {link ? <a href={link} target="_blank" rel="noopener noreferrer">{replacement}</a>:null}
        </div>
      </div>
    </div>
  )
}

OneMessage.propTypes = {
  data: PropTypes.object
}
