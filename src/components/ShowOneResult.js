import React from 'react'
import '../css/oneResultTable.css'

export default function ShowOneResult(props) {
    const r = props.result
    return (
       <>
            <tr className="OneResultTable TableTop">
                <td>{r.provider}</td>
                <td>{r.departure.date}</td>
                <td>{r.departure.time}</td>
                <td>{r.origin}</td>
                <td>{r.dur}</td>
                <td>{r.price}</td>
            </tr>
            <tr className="OneResultTable TableBottum">
                <td></td>
                <td></td>
                <td>{r.arrival.time}</td>
                <td>{r.destination}</td>
                <td>{r.transfers}</td>
            </tr>
        </>
    )
}
