import processResponse from './prosessResponse'
import handleServerState from './handleServerState'

export default async function makeServerUpdate(mainStateToServer, setMainState, ShowMessages){
    const url = 'http://localhost:8080'
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(mainStateToServer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //Antwort
        const json = await response.json()
        //Verarbeitung
        const [informationPackage, answerPackege] = processResponse(json)
        ShowMessages.showMessages(
            answerPackege, 
            () => {handleServerState(informationPackage.state, mainStateToServer, setMainState, ShowMessages)}
            )
        
        //showResult(resultPackage, (a) => {this.setState(old => Object.assign({},old,{results: a}))})
        setMainState((old) => {
            const newState = old
            newState.toServer.informationPackage = Object.assign(old.toServer.informationPackage, informationPackage)
            newState.emotion = answerPackege.emotion
            return newState
        })

    }
    catch (error) {

    }
}