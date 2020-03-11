import React from 'react'
import ShowOneResult from './ShowOneResult'

export default function ShowResult(props) {
    const MyResultComponents = []
    if(props.results.arrival){
        MyResultComponents.push(
            <ShowOneResult result={props.results}/>        
            )
    }
    return (
        <div>
            {MyResultComponents}
        </div>
    )
}

