import React from "react";
import {Link} from "react-router-dom";

const SelectingtimePage = () => {
    return (
        <div>
            <h2>
                Available Time slots :
            </h2>
            <hr className="mb-4"/>
            <div className="container time-slots">
                <div className="row nice-space">
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">10:00 AM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">10:30 AM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">11:00 AM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord time-active">
                        <div className="card-body">
                            <h5 className="card-title">11:30 AM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">12:00 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">12:30 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">1:00 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">1:30 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">2:00 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">2:30 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">3:00 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">3:30 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">4:00 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">4:30 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">5:00 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 shadow-lord">
                        <div className="card-body">
                            <h5 className="card-title">5:30 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5 ">
                        <div className="card-body">
                            <h5 className="card-title">6:00 PM</h5>
                        </div>
                    </div>
                    <div className="card mb-3 mr-1 col-5">
                        <div className="card-body">
                            <h5 className="card-title">6:30 PM</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="time-buttons">
                <Link to={"/booking"}>
                    <button className="btn btn-lg btn-primary mb-3 btn-block" disabled={false}>
                        Book your slot
                    </button>
                </Link>
                <button className="btn btn-lg btn-primary mb-3 btn-block" disabled={true}>
                    Select a slot
                </button>
            </div>
        </div>
    )
}

export default SelectingtimePage;