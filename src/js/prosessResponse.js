function processResponse(responseJson) {
    let [informationPackage, answerPackege, resultPackage] = []
    for (const pack in responseJson) {
        //console.log(pack)
        switch (pack) {
            case "informationPackage":
                informationPackage = responseJson[pack]
                break;
            case "answerPackage":
                answerPackege  = responseJson[pack]
                break;
            case "resultPackage":
                resultPackage = responseJson[pack]
                break;
            default:
                break;
        }
    }
    return [informationPackage, answerPackege, resultPackage]
}
export default processResponse