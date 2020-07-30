import React from 'react'
import '../css/oneResultTable.css'

export default function ShowOneResult(props) {
    const r = props.result
    const c = props.classObj
    return (
            <tr className="OneResultTable">
                <td className={c.providerClass}>{r.provider}</td>
                <td className={c.dateClass+" TableColumnTwo"}>{r.departure.date}</td>
                <td className={c.originClass}>{r.origin}</td>
                <td className={c.deptimeClass+" TableColumnTwo"}>{r.departure.time}</td>
                <td className={c.arrtimeClass}>{r.arrival.time}</td>
                <td className={c.durClass+" TableColumnTwo"}>{r.dur}</td>
                <td className={c.transfersClass}>{r.transfers}</td>
                <td className={c.priceClass+" TableColumnTwo"}>{r.price}</td>
            </tr>
    )
}
