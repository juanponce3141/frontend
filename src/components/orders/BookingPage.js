import React, { Component } from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as orderActions from "../../redux/actions/orderActions";
import * as bookingActions from "../../redux/actions/bookingAction";
import { connect } from "react-redux";

class BookingPage extends Component {
    componentDidMount() {
        const {booking, actions} = this.props;
        console.log("what");
        console.log(booking)

        actions.loadBookings().catch(error => {
            alert("Loading authors failed" + error)
        })

    }

    render() {
        return (
            <form>
                <h1>Booking</h1>
                <hr/>
                <div className="card">
                    <div className="card-header">
                        User info
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control card-title" placeholder="First & Last name"
                                       aria-label="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="IG Name"
                                       aria-label="Last name"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address (Optional)</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                        <p>Pickup Date : Saturday, January 17, 2021</p>
                        <p>Pickup Time</p>
                        <div className="mb-2">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="11:00pm" defaultValue>11:00am</option>
                                <option value="11:30pm">11:30am</option>
                                <option value="12:00pm">12:00pm</option>
                                <option value="12:30pm">12:30pm</option>
                                <option value="1:00pm">1:00pm</option>
                                <option value="1:30pm">1:30pm</option>
                            </select>
                        </div>
                        <div className="d-grid gap-1 col-11 mx-auto">
                            <button className="btn btn-success" type="button">Complete Booking</button>
                            <button className="btn btn-danger btn-lg btn-block" type="button" disabled>Name and pickup time please</button>
                        </div>
                    </div>
                </div>
                {this.props.booking.title}
            </form>
        );
    }
}

BookingPage.propTypes = {
    booking: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        booking: state.booking
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createOrders: bindActionCreators(orderActions.createOrder, dispatch),
            loadBookings: bindActionCreators(bookingActions.loadBookings, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);