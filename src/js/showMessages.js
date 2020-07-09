export default class showMessages{
    constructor(setMainState){
        this.setMainState = setMainState
    }
    showMessages(answerPackege){
        const speed = 30
        let {preface, mainAnswer, last} = answerPackege
        //console.log(answerPackege)
        const setNewText = (text) => {
            this.setMainState((old) => {
                const newState = old
                newState.messanges.push({text: text, key : newState.messanges.length, user: false})
                return newState
            })
        }
        const changeText = (c) => {
            this.setMainState(old => {
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

        const emptyString = '__empty__'

        if(preface === emptyString){
            preface = ""
        }
        if(mainAnswer === emptyString){
            mainAnswer = ""
        }
        if(last === emptyString){
            last = ""
        }
        const t1 = (preface.length+1)*speed
        const t2 = (mainAnswer.length+1)*speed+t1

        preface && typeNewText(preface)
        mainAnswer && setTimeout(function(){typeNewText(mainAnswer)}, t1)
        last && setTimeout(function(){typeNewText(last)}, t2)
    }
}