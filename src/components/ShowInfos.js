import React from 'react'
import { Table } from 'react-bootstrap'
import sortInfos from '../js/sortInfos'
import {infoTableStyle, ShowInfosTd} from '../js/styles'


function ShowInfos(props) {

    const rows = sortInfos(props.infos)

    return (
        <div className="ShowInfos" style={props.style}>
        <Table className="rounded-lg" style={infoTableStyle}>
            <tbody>
                {rows.map((o)=>(o?
                        <tr key={o[0]}>
                            <td style={ShowInfosTd}>{o[0]}</td>
                            <td style={ShowInfosTd}>{o[1]}</td>
                        </tr>  : null
                    )
                )}
            </tbody>
        </Table>
        </div>
    ) 
}
export default React.memo(ShowInfos)