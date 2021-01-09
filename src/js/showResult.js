export default function showResult(resultPackage, setResult) {

    for (let i = 0; i < resultPackage.length; i++) {
        const arrDate = new Date(resultPackage[i].arrival.timestamp * 1000)
        const depDate = new Date(resultPackage[i].departure.timestamp * 1000)


        const getTime = (a) => {
            const min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes()
            return (a.getHours() + ':' + min)
        }
        const getFullDate = (a) => (
            a.getDate() + '.' + (a.getMonth() + 1) + '.' + a.getFullYear()
        )
        const formatPrice = (a) => {
            const price = a.toString()
            const dotpos = price.length - price.indexOf('.')
            const resPrice = dotpos === 2 ? price + "0 €" : price + " €"
            return resPrice
        }

        resultPackage[i].arrival.date = getFullDate(arrDate)
        resultPackage[i].arrival.time = getTime(arrDate)

        resultPackage[i].departure.date = getFullDate(depDate)
        resultPackage[i].departure.time = getTime(depDate)

        resultPackage[i].priceStr = formatPrice(resultPackage[i].price)


        const durMin = resultPackage[i].duration.minutes < 10 ? "0" + resultPackage[i].duration.minutes : resultPackage[i].duration.minutes
        resultPackage[i].dur = resultPackage[i].duration.hour + ':' + durMin
    }
    setResult(resultPackage)
}