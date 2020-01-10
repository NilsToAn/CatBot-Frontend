import React from 'react'
import { Table } from 'react-bootstrap'

export default function ShowInfos(props) {
    const rows = []
    for (const key in props.infos){
        rows.push([key, props.infos[key]])
    }
    return (
        <Table className="border rounded-lg">
            <tbody>
                {rows.map((o)=>(o[1]?
                        <tr key={o[0]}>
                            <td>{o[0]}</td>
                            <td>{o[1]}</td>
                        </tr>  
                        :
                        null  
                    )
                )}
            </tbody>
        </Table>
    ) 
}
