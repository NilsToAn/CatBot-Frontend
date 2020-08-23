import React from 'react'
import { Container, Figure } from 'react-bootstrap'
import happyPic from '../pics/happy.png'
import { TopImageStyle } from '../js/styles'

export default function MyUberuns() {
    //renders the Uberuns page
    return (
        <>
            <Figure>
                <Figure.Image
                    style={TopImageStyle}
                    alt={"happy cat"}
                    src={happyPic}
                />
            </Figure>
            <Container className='Impressum'>
                <span className="textHeader">Über uns</span>
                <p>
                    Wir sind ein kleines 2-Mann-Team mit einer Leidenschaft für Open-Source-Webtechnologie und Chatbots.
                    Der gesamte Code für diese Website ist daher auf GitHub verfügbar:
            </p>
                <p>
                    {`
            Git1
            Git2
            `}
                </p>
                <p>
                    {`
            Wir freuen sehr über Kommentare & Feedback zur Website, schreibt dazu einfach eine Mail an:
            travel-catbot.de

            Außerdem möchten wir uns an dieser Stelle bei Constanze Prange bedanken, die den CatBot mit ihren Zeichnungen
            Leben eingehaucht hat. Ihr Instagram-Kanal ist unten verlinkt!
            `}
                </p>
            </Container>
        </>
    )
}
