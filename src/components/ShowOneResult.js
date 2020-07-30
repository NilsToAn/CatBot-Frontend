import React from 'react'
import '../css/oneResultTable.css'

export default function ShowOneResult(props) {
    const r = props.result
    return (
            <tr className="OneResultTable">
                <td>{r.provider}</td>
                <td className="TableColumnTwo">{r.departure.date}</td>
                <td>{r.origin}</td>
                <td className="TableColumnTwo">{r.departure.time}</td>
                <td>{r.arrival.time}</td>
                <td className="TableColumnTwo">{r.dur}</td>
                <td >{r.transfers}</td>
                <td className="TableColumnTwo">{r.price}</td>
            </tr>
    )
}
