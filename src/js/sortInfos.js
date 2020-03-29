export default function sortInfos(infos){
    let datum = `${infos.date[0]}.${infos.date[1]}.${infos.date[2]}`
    let result = [        
        ["Abfahrtsort", infos.origin],
        ["Zielort", infos.destination],
        ["Reisedatum", datum],
        ["Reisende", infos.traveller]
    ]
    return result
}