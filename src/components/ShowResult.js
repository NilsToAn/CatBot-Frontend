import React from 'react'
import ShowOneResult from './ShowOneResult'

export default function ShowResult(props) {
    const MyResultComponents = []
    for(let i = 0; i < props.results.length; i++){
        if(props.results[i].arrival){
            MyResultComponents.push(
                <ShowOneResult result={props.results[i]}/>        
                )
        }
    }
    return (
        <div>
            {MyResultComponents}
        </div>
    )
}

