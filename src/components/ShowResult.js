import React, {Component} from 'react'
import ShowOneResult from './ShowOneResult'
import { orderBy } from "lodash";


export default class ShowResult extends Component{
    state = {
        collection: [],
        sortParams: {direction: undefined}
    }
    componentDidUpdate(){
       if(this.props.results.length && this.props.results.length !== this.state.collection.length){
           this.setState({collection: this.props.results})
       }
    }

    handleColumnHeaderClick(sortKey) {
        const {collection,sortParams: { direction }} = this.state;

        // Check, what direction now should be
        const sortDirection = direction === "desc" ? "asc" : "desc";

        // Sort collection  
        const sortedCollection = orderBy(
          collection,
          ["sortKey"],
          [sortDirection]
        );

        //Update component state with new data
        this.setState({
          collection: sortedCollection,
          sortParams: {
            direction: sortDirection
          }
        })
      }

    render(){
        let MyResultComponents = []
        if(this.state.collection){
            const {collection} = this.state
            MyResultComponents = (collection.filter(o => o.arrival)).map(o => (
                <ShowOneResult result={o} key={o.departure.timestamp}/>
            ))
        }
    
    

    return (
        <div className = "TabelContainer">
            <table className = "oneResultTable">
                <thead>
                    <tr>
                        <th onClick={() => this.handleColumnHeaderClick("provider")}>Anbieter</th>
                        <th onClick={() => this.handleColumnHeaderClick("arrival")}>Tag</th>
                        <th onClick={() => this.handleColumnHeaderClick("provider")}>Ab/An</th>
                        <th></th>
                        <th onClick={() => this.handleColumnHeaderClick("dur")}>Dauer/Umstiege</th>
                        <th onClick={() => this.handleColumnHeaderClick("price")}>Gesamtpreis</th>
                    </tr>
                </thead>
                <tbody>
            {MyResultComponents}
            </tbody>
            </table>
        </div>
    )
}
}

