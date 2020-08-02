import React from 'react'
import { Table } from 'react-bootstrap'
import sortInfos from '../js/sortInfos'


function ShowInfos(props) {

    const rows = sortInfos(props.infos)

    return (
        <div className="ShowInfos" style={props.style}>
        <Table className="border rounded-lg" >
            <tbody>
                {rows.map((o)=>(o?
                        <tr key={o[0]}>
                            <td>{o[0]}</td>
                            <td>{o[1]}</td>
                        </tr>  : null
                    )
                )}
            </tbody>
        </Table>
        </div>
    ) 
}
export default React.memo(ShowInfos)