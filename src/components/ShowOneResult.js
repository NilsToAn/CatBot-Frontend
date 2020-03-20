import React from 'react'
import '../css/oneResultTable.css'

export default function ShowOneResult(props) {
    console.log(props.result)
    const r = props.result
    return (
        <div>
            <table className = "oneResultTable">
                <thead>
                    <tr>
                        <th>Ab/An</th>
                        <th></th>
                        <th>Dauer/Umstiege</th>
                        <th>Gesamtpreis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{r.departure.time}</td>
                        <td>{r.origin}</td>
                        <td>{r.dur}</td>
                        <td>{r.price}</td>
                    </tr>
                    <tr>
                        <td>{r.arrival.time}</td>
                        <td>{r.destination}</td>
                        <td>{"Umstiege"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
