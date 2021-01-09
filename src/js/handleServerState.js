import makeServerUpdate from './makeServerUpdate'

export default function handleServerState(serverState, mainStateToServer, setMainState, ShowMessanges) {
    const statesToSkip = ['chatbots', 'query', 'pet']
    const time = 3000

    console.log(serverState)
    if (statesToSkip.includes(serverState)) {
        console.log('skip')
        console.log(mainStateToServer)
        setTimeout(function () { makeServerUpdate(mainStateToServer, setMainState, ShowMessanges) }, time)
    }
}