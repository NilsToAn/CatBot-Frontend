import React from 'react'
import Figure from 'react-bootstrap/Figure'
import sadPic from '../pics/sad.png'
import happyPic from '../pics/happy.png'
import thinkingPic from '../pics/thinking.png'
import writerPic from '../pics/writer.png'


export default function MyEmotionPic(props) {
    let pic = ""
    switch (props.emotion) {
        case "happy":
            pic = happyPic
            break;
        case "sad":
            pic = sadPic
            break;
        case "thinking":
            pic = thinkingPic
            break;
        case "writer":
            pic = writerPic
            break;
        default:
            pic = happyPic
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
