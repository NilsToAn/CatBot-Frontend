export default class showMessages{
    constructor(setMainState, divMref){
        this.setMainState = setMainState
        this.speed = 20
        this.stopTyping = false
        this.isTyping = false
        this.savedUserMes = null
        this.savedAnswerPack = null
        this.nextFunc = null
        this.divMaxText = divMref.scrollWidth > 410? (410-20)*(34/39): (divMref.scrollWidth-20)*(34/39)
    }

    setNewText(text, user){
        this.setMainState((old) => {
            const newState = old
            newState.messanges.push({text: text, key : newState.messanges.length, user})
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

    typeOneMessange(string,index, indexM, lastbreak){
        if(this.stopTyping === false){
            let newbreak = lastbreak
            if(string[indexM].length > 0){
                let wordlen = string[indexM].substring(index, string[indexM].length).indexOf(' ')
                

                const colWidth = this.getTextWidth(string[indexM].substring(lastbreak, index+wordlen),'1rem')
                let toAdd = ""
                if (colWidth > this.divMaxText){
                    toAdd = "\n"
                    newbreak = index
                }
                if(string[indexM][index] === '\n'){
                    newbreak = index
                }
                if(index === 0){
                    this.setNewText(string[indexM][index], false)
                }else{
                    this.changeText(toAdd+string[indexM][index])
                }
            }
            if(index < string[indexM].length-1){
                setTimeout(i => this.typeOneMessange(string,index+1, indexM, newbreak), this.speed)
            }else if(indexM < string.length-1){
                setTimeout(i => this.typeOneMessange(string,0, indexM+1, 0), this.speed)
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

            this.typeOneMessange([preface, mainAnswer, last],0,0,0)
        }else{
            this.stopTyping = true
            this.savedAnswerPack = answerPackege
        }
    }

    getTextWidth(txt, font) {
        this.element = document.createElement('canvas');
        this.context = this.element.getContext("2d");
        //this.context.font = font;
        return this.context.measureText(txt).width;
    }
}