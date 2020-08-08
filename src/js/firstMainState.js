const firstMainState = {
  results: false,
  searchStation: false,
  displayResult: false,
  messanges: [],
  emotion: 'happy',
  toServer: {
    username: 'User', // name of the user
    message: '', // current input
    informationPackage:
        {
          origin: [], // can be multiple citys, extra field for auto-complet via js-req
          destination: [], // see origin
          date: [], // only one date, can be changed via interace and after request-done
          time: [], // see date
          traveller: -1,
          budget: -1,
          transfers: -1,
          state: '', // if users input can be inferred due to questions
          repeat : false
        }
  }
}
export default firstMainState
