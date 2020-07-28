import React from 'react'
import ShowOneResult from './ShowOneResult'
import { orderBy } from "lodash";


export default class ShowResult extends React.PureComponent{
    state = {
        collection: [],
        sortParams: {direction: undefined}
    }
    async componentDidUpdate(){
       if(this.props.results.length && this.props.results.length !== this.state.collection.length){
           const updateState = async function(setState, results){setState({collection: results})}
           await updateState((o) => this.setState(o), this.props.results.map((o,i) => Object.assign(o,{key:i})))
           this.handleColumnHeaderClick('price')
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
            case 'time':
                sortFunc = function(e) {const res = e.departure.time.replace(':','.'); return parseFloat(res)}
                break;
            case 'price':
                sortFunc = function(e) { return e.price}
                break;
            case 'dur':
                sortFunc = function(e) {const res = e.dur.replace(':','.'); return parseFloat(res)}
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
            <ShowOneResult result={o} key={o.key}/>
        )) : []
    
    

    return (
        <div className = "TabelContainer">
            <table className = "ResultTable">
                <thead>
                    <tr>
                        <th onClick={() => this.handleColumnHeaderClick("provider")}>Anbieter</th>
                        <th onClick={() => this.handleColumnHeaderClick("date")}>Tag</th>
                        <th onClick={() => this.handleColumnHeaderClick("time")}>Ab/An</th>
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

