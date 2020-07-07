import showMessages from './showMessages'
import processResponse from './prosessResponse'
import handleServerState from './handleServerState'

export default async function makeServerUpdate(mainStateToServer, setMainState){
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
        showMessages(answerPackege, (a) => { setMainState(a) })

        handleServerState(informationPackage.state, mainStateToServer, setMainState)
        
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