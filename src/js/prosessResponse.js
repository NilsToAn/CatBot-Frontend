function processResponse(responseJson) {
    let [informationPackage, answerPackege, resultPackage] = [,,]
    for (const pack in responseJson) {
        switch (pack) {
            case "informationPackage":
                informationPackage = responseJson[pack]
                break;
            case "answerPackage":

                break;
            case "resultPackage":

                break;
            default:
                break;
        }
    }
    return (informationPackage, answerPackege, resultPackage)
}
export default processResponse