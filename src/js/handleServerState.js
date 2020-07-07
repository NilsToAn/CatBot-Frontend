import makeServerUpdate from './makeServerUpdate'

export default function handleServerState(serverState, mainStateToServer, setMainState){
    const statesToSkip = ['chatbots']
    const time = 15000

    console.log(serverState)
    if(statesToSkip.includes(serverState)){
        console.log('skip')
        setTimeout(function(){makeServerUpdate(mainStateToServer, setMainState)}, time)
    }
}