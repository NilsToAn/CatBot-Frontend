export default class showMessages{
    constructor(setMainState){
        this.setMainState = setMainState
        this.speed = 20
        this.stopTyping = false
        this.isTyping = false
        this.savedUserMes = null
        this.savedAnswerPack = null
        this.nextFunc = null
    }

    setNewText(text, user, charsMissing){
        this.setMainState((old) => {
            const newState = old
            newState.messanges.push({text: text, key : newState.messanges.length, user, charsMissing})
            return newState
        })
    }

    changeText(c, charsMissing){
        this.setMainState(old => {
            const newState = old
            let i = 1
            while(newState.messanges[newState.messanges.length-i].user === true){
                i = i + 1
            }
            newState.messanges[newState.messanges.length-i].text += c
            newState.messanges[newState.messanges.length-i].charsMissing = charsMissing
            return newState
        })
    }

    typeOneMessange(string,index, indexM){
        if(this.stopTyping === false){
            if(string[indexM].length > 0){
                let wordlen = string[indexM].substring(index, string[indexM].length).indexOf(' ')
                wordlen = wordlen < 1? 1 : wordlen
                let charsmissing = string[indexM].substring(index+1, index+wordlen)
                if(index === 0){
                    this.setNewText(string[indexM][index], false, charsmissing)
                }else{
                    this.changeText(string[indexM][index], charsmissing )
                }
            }
            if(index < string[indexM].length-1){
                setTimeout(i => this.typeOneMessange(string,index+1, indexM), this.speed)
            }else if(indexM < string.length-1){
                setTimeout(i => this.typeOneMessange(string,0, indexM+1), this.speed)
            }else{
                this.nextFunc && this.nextFunc()
                this.nextFunc = null
                this.isTyping = false
            }
        }
        else{
            index === 0? this.setNewText(string[indexM]): this.changeText(string[indexM].substring(index), false)
            for (let i = indexM+1; i < string.length; i++) {
                string[i].lenght && this.setNewText(string[i], false, 0)
            }
            this.stopTyping = false
            this.isTyping = false
            this.savedUserMes && this.showUserMessage(this.savedUserMes)
            this.savedAnswerPack && this.showMessages(this.savedAnswerPack)
        }
    }

    showUserMessage(text){
        if(this.isTyping === false){
            this.setNewText(text, true)
        }else{
            this.savedUserMes = text
        }
    }

    showMessages(answerPackege, nextFunc = null){
        console.log(answerPackege)
        if(nextFunc){
            this.nextFunc = nextFunc
        }
        if(this.isTyping === false){
            this.isTyping = true
            let {preface, mainAnswer, last} = answerPackege

            const emptyString = '__empty__'

            if(!preface || preface === emptyString){
                preface = ""
            }
            if(!mainAnswer || mainAnswer === emptyString){
                mainAnswer = ""
            }
            if(!last || last === emptyString){
                last = ""
            }

            this.typeOneMessange([preface, mainAnswer, last],0,0)
        }else{
            this.stopTyping = true
            this.savedAnswerPack = answerPackege
        }
    }
}