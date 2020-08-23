
export default function sortInfos(infos) {
    const formatTime = (timeList) => (
        timeList[1] > 9 ? `${timeList[0]}:${timeList[1]}` : `${infos.time[0]}:0${infos.time[1]}`
    )
    const formatPrice = (a) => {
        const price = a.toString()
        const resPrice = price.length === 4 ? price + "0 €" : price + " €"
        return resPrice
    }
    let result = [
        infos.origin.length && ["Abfahrtsort", infos.origin.join(', ')],
        infos.destination.length && ["Zielort", infos.destination],
        infos.date.length && ["Reisedatum", infos.date.map(o => `${o[0]}.${o[1]}.${o[2]}`).join(', ')],
        infos.traveller !== -1 && ["Reisende", infos.traveller],
        infos.budget !== -1 && ['Maximal Preis', formatPrice(infos.budget)],
        infos.time.length && ['Abfahrtszeit', formatTime(infos.time)],
        infos.transfers !== -1 && ['Maximale Umsteige', infos.transfers]
    ]
    return result
}
