const firstMainState = {
  results: {},
  displayResult: false,
  messanges: [],
  emotion: 'happy',
  toServer: {
    username: 'User', // name of the user
    message: '', // current input
    informationPackage:
        {
          origin: ['Bochum','Dortmund'], // can be multiple citys, extra field for auto-complet via js-req
          destination: ['Hannover'], // see origin
          date: [[5, 8, 2020]], // only one date, can be changed via interace and after request-done
          time: [], // see date
          traveller: 1,
          budget: 0,
          transfers: 0,
          state: '' // if users input can be inferred due to questions
        }
  }
}
export default firstMainState
