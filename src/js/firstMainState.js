const firstMainState = {
    results: {test:"teste"},
    displayResult:false,
    messanges:[
        {text: "Hallo", key: 0, user:false}
    ],
    emotion: 'normal',
    toServer:{
        username:"Felix", //name of the user
        message:"Hallo du Arsch. Wie gehts?", //current input
        informationPackage:
        {
            origin: ["Bochum"], //can be multiple citys, extra field for auto-complet via js-req
            destination: [], //see origin
            date: [5,5,2020], //only one date, can be changed via interace and after request-done
            time: [], //see date
            traveller: 1, 
            budget: 0,
            transfers: 0,
            requestDone: false, //bool, after true, fields can be overriden via nlu
            jsRequest: ["open-window-for-dest", "open-window-for-origin"], //sets extra windows for autocomplte
            state: "" //if users input can be inferred due to questions
        }
    }
}
export default firstMainState