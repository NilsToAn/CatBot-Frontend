import React from 'react'
import ShowOneResult from './ShowOneResult'
import { orderBy } from "lodash";


export default class ShowResult extends React.PureComponent {
    state = {
        collection: [],
        sortParams: { direction: undefined },
        classObj: {},
        isLoading: true,
    }

    static getDerivedStateFromProps(props, state) {
        const { results } = props
        if (results.length !== state.collection.length) {
            if (results === false) {
                return {
                    collection: [],
                    isLoading: true
                }
            } else {
                let resultwithKey = results.map((o, i) => Object.assign(o, { key: i }))
                const sortedRes = orderBy(resultwithKey, "price", ["asc"])
                return {
                    collection: sortedRes,
                    sortParams: { direction: "asc" },
                    classObj: { priceClass: "MarkedColumn" },
                    isLoading: false
                }
            }
        } else if (results.length === 0) {
            return {
                isLoading: false,
                collection: []
            }
        } else {
            return false
        }
    }

    handleColumnHeaderClick(sortKey) {
        const { collection, sortParams: { direction } } = this.state;
        this.setState({ sortKey })
        // Check, what direction now should be
        const sortDirection = direction === "desc" ? "asc" : "desc";
        let sortFunc = function (e) { return e.price }
        switch (sortKey) {
            case 'provider':
                sortFunc = function (e) { return e.provider }
                break;
            case 'date':
                sortFunc = function (e) { return e.departure.timestamp }
                break;
            case 'origin':
                sortFunc = function (e) { return e.origin }
                break
            case 'deptime':
                sortFunc = function (e) { const res = e.departure.time.replace(':', '.'); return parseFloat(res) }
                break;
            case 'arrtime':
                sortFunc = function (e) { const res = e.arrival.time.replace(':', '.'); return parseFloat(res) }
                break;
            case 'dur':
                sortFunc = function (e) { const res = e.dur.replace(':', '.'); return parseFloat(res) }
                break;
            case 'transfers':
                sortFunc = function (e) { return e.transfers }
                break
            case 'price':
                sortFunc = function (e) { return e.price }
                break;
            default:
                sortFunc = function (e) { return e.price }
                break;
        }

        const marked = "MarkedColumn"

        let providerClass = sortKey === "provider" ? marked : ""
        let dateClass = sortKey === "date" ? marked : ""
        let originClass = sortKey === "origin" ? marked : ""
        let deptimeClass = sortKey === "deptime" ? marked : ""
        let arrtimeClass = sortKey === "arrtime" ? marked : ""
        let durClass = sortKey === "dur" ? marked : ""
        let transfersClass = sortKey === "transfers" ? marked : ""
        let priceClass = sortKey === "price" ? marked : ""

        this.setState((old) => Object.assign(old, {
            classObj: {
                providerClass,
                dateClass,
                originClass,
                deptimeClass,
                arrtimeClass,
                durClass,
                transfersClass,
                priceClass
            }
        }))
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

    render() {
        const MyResultComponents = this.state.collection ?
            (this.state.collection.filter(o => o.arrival)).map(o => (
                <ShowOneResult result={o} key={o.key} classObj={this.state.classObj} />
            )) : false
        return (
            <>
                <div className="TabelHeaderDiv">
                    <span className="TextBeforTabel">
                        Deine Reise nach
        <span className="TextBeforTabelCity"> {this.props.dest}</span>
                    </span>
                </div>
                <div className="TabelContainer">
                    {!this.state.isLoading ?
                        MyResultComponents.length ?
                            <table className="ResultTable">
                                <thead>
                                    <tr>
                                        <th
                                            className="TableHeader"
                                            onClick={() => this.handleColumnHeaderClick("provider")}
                                        >Anbieter</th>
                                        <th
                                            className="TableHeader TableColumnTwo"
                                            onClick={() => this.handleColumnHeaderClick("date")}
                                        >Tag</th>
                                        <th
                                            className="TableHeader"
                                            onClick={() => this.handleColumnHeaderClick("origin")}
                                        >Abfahrtsort</th>
                                        <th
                                            className="TableHeader TableColumnTwo"
                                            onClick={() => this.handleColumnHeaderClick("deptime")}
                                        >Ab</th>
                                        <th
                                            className="TableHeader"
                                            onClick={() => this.handleColumnHeaderClick("arrtime")}
                                        >An</th>
                                        <th
                                            className="TableHeader TableColumnTwo"
                                            onClick={() => this.handleColumnHeaderClick("dur")}
                                        >Dauer</th>
                                        <th
                                            className="TableHeader"
                                            onClick={() => this.handleColumnHeaderClick("transfers")}
                                        >Umstiege</th>
                                        <th
                                            className="TableHeader TableColumnTwo"
                                            onClick={() => this.handleColumnHeaderClick("price")}
                                        >Gesamtpreis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MyResultComponents}
                                </tbody>
                            </table>
                            : <div>Keine Ergebnisse, entweder deine Suche war zu restriktiv oder es gibt technische Probleme. Versuch es nochmal!</div>
                        : <div>Lädt...</div>
                    }
                </div>
            </>
        )
    }
}

