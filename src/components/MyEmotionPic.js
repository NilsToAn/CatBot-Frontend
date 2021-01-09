import React, { useState } from 'react'
import Figure from 'react-bootstrap/Figure'
import { TopImageStyle } from '../js/styles'
import sadPic from '../pics/sad.png'
import happyPic from '../pics/happy.png'
import thinkingPic from '../pics/thinking.png'
import writerPic from '../pics/writer.png'


function MyEmotionPic(props) {
    //The funtion to show the right emotion with animation used from MainBody.js
    let pic = ""
    const [opacity, setOpacity] = useState(1)
    const [lastEmotion, setLastEmotion] = useState('happy')
    const [showEmotion, setShowEmotion] = useState('happy')
    if (lastEmotion !== props.emotion) {
        setLastEmotion(props.emotion)
        let state = 'fadeOut'
        let opCont = opacity
        let fade = setInterval(() => {
            if (state === 'fadeOut') {
                if (opCont < 0.1) {
                    state = 'changePic'
                } else {
                    opCont *= 0.8
                    setOpacity(opCont)

                }
            } else if (state === 'changePic') {
                setShowEmotion(props.emotion)
                state = 'fadeIn'
            } else if (state === 'fadeIn') {
                if (opCont > 0.99) {
                    clearInterval(fade)
                } else {
                    setOpacity(opCont)
                    opCont *= 1.2
                }
            }
        }
            , 50);
    }
    switch (showEmotion) {
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
        <Figure style={{ opacity: opacity }}>
            <Figure.Image
                style={TopImageStyle}
                alt={props.emotion}
                src={pic}
            />
        </Figure>
    )
}

export default React.memo(MyEmotionPic)