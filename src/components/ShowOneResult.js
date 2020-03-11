import React from 'react'
//import '../flixstyle.css'

export default function ShowOneResult(props) {
    console.log(props.result)
    return (
        <div className="sr-row row ride-available ab-test-ride-flags-0 interconnection-0-471-4628-96773811-30-96967931 ride--unbooked js-ride--unbooked" data-ride-data="{&quot;id&quot;:&quot;interconnection-0-471-4628-96773811-30-96967931&quot;,&quot;persons&quot;:1,&quot;status&quot;:&quot;available&quot;}" data-ride-direction="direct" data-btn-tmp="{&quot;remove&quot;:&quot;%seats_count% Platz entfernen&quot;,&quot;add&quot;:&quot;%seats_count% Platz buchen&quot;,&quot;switch&quot;:&quot;%seats_count% Platz wechseln&quot;}" data-departure-date="2020-03-11">
            <div className="col-xs-7 col-sm-5 col-md-6 col-lg-5 time-transfer">
                <div className="row"><div className="col-xs-12 ride-stations">
                    <table className="flix-connection fixed-layout">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flix-connection__time departure-time">
                                        19:10
                                    </div>
                                </td>
                                <td>
                                    <div className="flix-connection__station">
                                        <div className="station-name-label">
                                            Berlin SXF
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flix-connection__time">
                                        06:45
                                    </div>
                                </td>
                                <td>
                                    <div className="flix-connection__station">
                                        <div className="station-name-label">
                                            München Fröttmaning
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-xs-12 visible-xs visible-md transfer-information">
                    <div className="row"><div className="col-xs-12">
                        <span className="transf-num ride__transfer--mobile">
                            <span className="">
                                <span className="visible-xs-inline visible-md-inline transfer-text">
                                    Umsteigen 
                                </span>
                                <span className="visible-sm-inline visible-lg-inline num">
                                    1 
                                </span>
                                <span className="has-popup" data-popup-id="transf-num-popup-interconnection-0-471-4628-96773811-30-96967931">
                                    <img src="https://d3gelgmyzspcuw.cloudfront.net/739e03497/img/icons/quest-mark@2x.png" alt="" />
                                        <div className="popup" id="transf-num-popup-interconnection-0-471-4628-96773811-30-96967931">
                                            <span className="popup-top">
                                                <div>Umsteigen in Leipzig Hbf (Fernbusterminal)
                                                    </div>
                                                    <div>
                                                        Ankunft: 21:55 Abfahrt: 01:30
                                                    </div>
                                                    <div className="light-gray">
                                                        Du hast 3 
                                                        <span className="hours">H</span> 
                                                        35 
                                                        <span className="minutes">M</span> 
                                                        zum Umsteigen.
                                                    </div>
                                                </span>
                                                <span className="popup-bot"></span>
                                            </div>
                                        </span>
                                    </span>
                                </span>
                                <span className="duration ride__duration ride__duration-messages ride__duration-messages--mobile visible-xs-inline-block visible-md-inline-block">
                                    ( 11:35 <span className=" ride__duration-suffix duration-suffix">Std.</span>)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-5 col-sm-7 col-md-6 col-lg-7">
                <div className="row">
                    <div className="col-sm-3 col-lg-3 visible-sm visible-lg">
                        <div className="row">
                            <div className="col-xs-12 duration ride__duration ride__duration-messages">
                                11:35 
                                <span className=" ride__duration-suffix duration-suffix">Std.</span>
                            </div>
                            <div className="col-xs-12 transf-num">
                                <span className=""><span className="visible-xs-inline visible-md-inline transfer-text">Umsteigen </span>
                                <span className="visible-sm-inline visible-lg-inline num">1 </span>
                                <span className="has-popup" data-popup-id="transf-num-popup-interconnection-0-471-4628-96773811-30-96967931">
                                    <img src="https://d3gelgmyzspcuw.cloudfront.net/739e03497/img/icons/quest-mark@2x.png" alt="" />
                                    <div className="popup" id="transf-num-popup-interconnection-0-471-4628-96773811-30-96967931">
                                        <span className="popup-top">
                                            <div>
                                                Umsteigen in Leipzig Hbf (Fernbusterminal)
                                            </div>
                                            <div>Ankunft: 21:55Abfahrt: 01:30</div>
                                            <div className="light-gray">
                                                Du hast 3 <span className="hours">H</span> 35 <span className="minutes">M</span> zum Umsteigen.
                                            </div>
                                        </span>
                                        <span className="popup-bot"></span>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-9 col-md-12 col-lg-9 price-actions">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-12 col-lg-5 total">
                            <span className="num currency-small-cents">69<sup>,98</sup>&nbsp;€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xs-12 extra-info">
            <div className="usp-wrapper">
                <span className="usp-has-hint" data-hint="Kostenloses WLAN">
                    <i className="flix-icon flix-icon-wifi-solid"></i>
                </span>
                <span className="usp-has-hint" data-hint="Steckdosen">
                    <i className="flix-icon flix-icon-socket-solid"></i>
                </span>
                <span className="usp-has-hint" data-hint="Toilette">
                    <i className="flix-icon flix-icon-toilet-solid"></i>
                </span>
            </div>
            <div className="seats-notice">
                Aufgepasst! Es ist nur noch <em>1</em> Platz verfügbar!                
            </div>
        </div>
    </div>
    )
}
