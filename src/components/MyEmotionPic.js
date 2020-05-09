import React from 'react'
import Figure from 'react-bootstrap/Figure'
import angryPic from '../pics/wuetend.png'
import normalPic from '../pics/gluecklich.png'

export default function MyEmotionPic(props) {
    let pic = ""
    switch (props.emotion) {
        case "normal":
            pic = normalPic
            break;
        case "angry":
            pic = angryPic
            break;
        default:
            pic = normalPic
            break
    }
    return (
    <Figure>
        <Figure.Image
            width={180}
            height={180}
            alt={props.emotion}
            src={pic}
        />
    </Figure>
    )
}
