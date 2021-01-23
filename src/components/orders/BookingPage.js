import React, { Component } from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as orderActions from "../../redux/actions/orderActions";
import * as bookingActions from "../../redux/actions/bookingAction";
import { connect } from "react-redux";

class BookingPage extends Component {
    componentDidMount() {
        const {booking, actions} = this.props;

        actions.loadBookings().catch(error => {
            alert("Loading authors failed" + error)
        })

    }

    render() {
        return (
            <form>
                <h2>Booking</h2>
                <hr/>
                <div className="card">
                    <div className="card-header">
                        User info
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <div className="row g-3 mb-5">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="IG Name"
                                       aria-label="Last name"/>
                            </div>
                        </div>
                        <h5>Pickup </h5>
                        <div className="mb-2">Time: 11:00 AM</div>
                        <div className="mb-5">Date : Saturday, January 17, 2021</div>
                        <div className="d-grid mb-4 gap-1 col-11 mx-auto">
                            <button className="btn btn-success" type="button">Complete Booking</button>
                            <button className="btn btn-danger btn-lg btn-block" type="button" disabled>Name and pickup time please</button>
                        </div>
                    </div>
                </div>
                {/*{this.props.booking.title}*/}
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