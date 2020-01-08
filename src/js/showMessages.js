export default function showMessages(answerPackege, setState){
    const speed = 120
    let {preface, mainAnswer, last} = answerPackege
    const setNewText = (text) => {
        setState((old) => {
            const newState = old
            newState.messanges.push({text: text, key : newState.messanges.length, user: false})
            return newState
        })
    }
    const changeText = (c) => {
        setState(old => {
            const newState = old
            newState.messanges[newState.messanges.length-1].text += c
            return newState
        })
    }
    const typeNewText = text => {
        if(text.length > 0){
            setNewText("")
            for (const i in text){
                setTimeout(function(){changeText(text[i])}, speed*i)
            }
        }
    }




    const t1 = (preface.length+1)*speed
    const t2 = (mainAnswer.length+1)*speed+t1
    typeNewText(preface)
    setTimeout(function(){typeNewText(mainAnswer)}, t1)
    setTimeout(function(){typeNewText(last)}, t2)
}