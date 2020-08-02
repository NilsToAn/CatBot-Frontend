
export default function sortInfos(infos){
    let result = [        
        infos.origin.length && ["Abfahrtsort", infos.origin.join(', ')],
        infos.destination.length && ["Zielort", infos.destination],
        infos.date.length && ["Reisedatum", infos.date.map(o => `${o[0]}.${o[1]}.${o[2]}`).join(', ')],
        infos.traveller !== -1 && ["Reisende", infos.traveller],
        infos.budget !== -1 && ['Maximal Preis', infos.budget],
        infos.time.length && ['Abfahrtszeit', infos.time.join(':')],
        infos.transfers !== -1 && ['Maximale Umsteige', infos.transfers]
    ]
    return result
}