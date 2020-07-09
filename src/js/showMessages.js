export default class showMessages{
    constructor(setMainState){
        this.setMainState = setMainState
        this.normalSpeed = 30
        this.speed = this.normalSpeed
        this.isTyping = false
    }
    setNewText(text){
        this.setMainState((old) => {
            const newState = old
            newState.messanges.push({text: text, key : newState.messanges.length, user: false})
            return newState
        })
    }
    changeText(c){
        this.setMainState(old => {
            const newState = old
            let i = 1
            while(newState.messanges[newState.messanges.length-i].user === true){
                i = i + 1
            }
            newState.messanges[newState.messanges.length-i].text += c
            return newState
        })
    }
    typeOneMessange(string,index, indexM){
        if(string[indexM].length > 0){
            if(index === 0){
                this.setNewText(string[indexM][index])
            }else{
                this.changeText(string[indexM][index])
            }
        }
        if(index < string[indexM].length-1){
            setTimeout(i => this.typeOneMessange(string,index+1, indexM), this.speed)
        }else if(indexM < 3-1){
            setTimeout(i => this.typeOneMessange(string,0, indexM+1), this.speed)
        }else{
            this.isTyping = false
        }
    }

    showMessages(answerPackege){
        if(this.isTyping === false){
            this.isTyping = true
            let {preface, mainAnswer, last} = answerPackege
            //console.log(answerPackege)


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

            this.typeOneMessange([preface, mainAnswer, last],0,0)
        }else{
            this.speed = 0.1
            setTimeout(i => {
                this.speed = this.normalSpeed
                this.showMessages(answerPackege)
            }, 1000)
        }
    }
}