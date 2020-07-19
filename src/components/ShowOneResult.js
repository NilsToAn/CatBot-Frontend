import React from 'react'
import '../css/oneResultTable.css'

export default function ShowOneResult(props) {
    console.log(props)
    const r = props.result
    return (
        <div>
            <table className = "oneResultTable">
                <thead>
                    <tr>
                        <th>Anbieter</th>
                        <th>Tag</th>
                        <th>Ab/An</th>
                        <th></th>
                        <th>Dauer/Umstiege</th>
                        <th>Gesamtpreis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{r.provider}</td>
                        <td>{r.arrival.date}</td>
                        <td>{r.departure.time}</td>
                        <td>{r.origin}</td>
                        <td>{r.dur}</td>
                        <td>{r.price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{r.arrival.time}</td>
                        <td>{r.destination}</td>
                        <td>{r.transfers}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
