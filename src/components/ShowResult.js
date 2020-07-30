import React from 'react'
import ShowOneResult from './ShowOneResult'
import { orderBy } from "lodash";


export default class ShowResult extends React.PureComponent{
    state = {
        collection: [],
        sortParams: {direction: undefined}
    }

    static getDerivedStateFromProps(props, state){
        const {results} = props
        if(results.length && results.length !== state.collection.length){
            const sortedRes = orderBy(results, "price", ["asc"])
            return {collection: sortedRes}
        }else{
            return false
        }
    }

    handleColumnHeaderClick(sortKey) {
        const {collection,sortParams: { direction }} = this.state;
        console.log(sortKey)
        // Check, what direction now should be
        const sortDirection = direction === "desc" ? "asc" : "desc";
        let sortFunc = function(e) { return e.price}
        switch (sortKey) {
            case 'provider':
                sortFunc = function(e) {return e.provider}
                break;
            case 'date':
                sortFunc = function(e) {return e.departure.timestamp}
                break;
            case 'origin':
                sortFunc = function(e) {return e.origin}
                break
            case 'deptime':
                sortFunc = function(e) {const res = e.departure.time.replace(':','.'); return parseFloat(res)}
                break;
            case 'arrtime':
                sortFunc = function(e) {const res = e.arrival.time.replace(':','.'); return parseFloat(res)}
                break;
            case 'dur':
                sortFunc = function(e) {const res = e.dur.replace(':','.'); return parseFloat(res)}
                break; 
            case 'transfers':
                sortFunc = function(e) {return e.transfers}
                break
            case 'price':
                sortFunc = function(e) { return e.price}
                break;
            default:
                sortFunc = function(e) { return e.price}
                break;
        }

        // Sort collection  
        const sortedCollection = orderBy(
          collection,
          sortFunc,
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
        console.log('show results')
        const MyResultComponents = this.state.collection ? 
        (this.state.collection.filter(o => o.arrival)).map(o => (
            <ShowOneResult result={o} key={o.arrival.timestamp}/>
        )) : []
    
    

    return (
        <>
        <span className="TextBeforTabel">
            Deine Reise nach 
            <span className="TextBeforTabelCity"> {this.state.collection[0].destination}</span>
        </span>
        <div className = "TabelContainer">
            <table className = "ResultTable">
                <thead>
                    <tr>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("provider")}
                            >Anbieter</th>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("date")}
                            >Tag</th>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("origin")}
                            >Abfahrtsort</th>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("deptime")}
                            >Ab</th>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("arrtime")}
                            >An</th>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("dur")}
                            >Dauer</th>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("transfers")}
                            >Umstiege</th>
                        <th 
                            className = "TableHeader"
                            onClick={() => this.handleColumnHeaderClick("price")}
                            >Gesamtpreis</th>
                    </tr>
                </thead>
                <tbody>
            {MyResultComponents}
            </tbody>
            </table>
        </div>
        </>
    )
}
}

