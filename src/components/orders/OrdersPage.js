import React, { Component } from "react";
import { connect } from "react-redux";
import * as orderActions from "../../redux/actions/orderActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const defaultOrder = {
    order: {
        title: "CHICKEN_SANDWICH",
        spiceLevel: 'MILD',
        comment: ''
    }
};

class OrdersPage extends Component {
    state = {
        order: {
            title: "CHICKEN_SANDWICH",
            spiceLevel: 'MILD',
            comment: ''
        }
    };

    handleChange = event => {
        const order = { ...this.state.order, title: event.target.value };
        this.setState({ order });
    };

    handleChangeSpiceLevel = event => {
        const order = { ...this.state.order, spiceLevel: event.target.value };
        this.setState({ order });
    };

    handleChangeComments = event => {
        const order = { ...this.state.order, comment: event.target.value };
        this.setState({ order });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.actions.createOrder(this.state.order);
        this.setState({defaultOrder})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Orders</h2>
                <hr/>
                <div className="card">
                    <div className="card-header">
                        Add Order
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Select Item</h5>
                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioItem"
                                    id="flexRadioItem1"
                                    onChange={this.handleChange}
                                    value="CHICKEN_SANDWICH"
                                    defaultChecked={true}
                                />
                                <label className="form-check-label" htmlFor="flexRadioItem1">
                                    Chicken Sandwitch
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioItem"
                                    id="flexRadioItem2"
                                    onChange={this.handleChange}
                                    value="TSUNAMI_FRIES"
                                />
                                <label className="form-check-label" htmlFor="flexRadioItem2">
                                    Tsunami Fries
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioItem"
                                    id="flexRadioItem3"
                                    onChange={this.handleChange}
                                    value="MAC_AND_CHEESE"
                                />
                                <label className="form-check-label" htmlFor="flexRadioItem3">
                                    Mac & Cheese
                                </label>
                            </div>
                        </div>
                        <hr/>
                        <h5 className="card-text">Spice Level:</h5>
                        <div hidden={this.state.order.title != 'CHICKEN_SANDWICH' && this.state.order.title != 'TSUNAMI_FRIES'}>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    onChange={this.handleChangeSpiceLevel}
                                    value="NAKED"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Naked
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    onChange={this.handleChangeSpiceLevel}
                                    value="MILD"
                                    defaultChecked={true}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Mild
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault3"
                                    onChange={this.handleChangeSpiceLevel}
                                    value="MEDIUM"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Medium
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault3"
                                    onChange={this.handleChangeSpiceLevel}
                                    value="HOT"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                    Hot
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments :</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="2"
                                onChange={this.handleChangeComments}
                                value={this.state.order.comment}
                            ></textarea>
                        </div>
                        <Button type="submit" className="btn btn-primary">Add to order</Button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                    <tr hidden={this.props.orders.length < 1}>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">SpiceLevel</th>
                        <th scope="col">Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map((order, i) => (
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{order.title}</td>
                                <td>{order.spiceLevel}</td>
                                <td>{order.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.props.orders.length > 0 ?
                    <Link to={"/selectingtime"}>
                        <Button type="button" className="btn btn-success btn-lg btn-block" disabled={this.props.orders.length < 1}>Submit Order</Button>
                    </Link>
                    : <button type="button" className="btn btn-secondary btn-lg btn-block" disabled={true}>Finalize Order...</button>
                }
            </form>
        );
    }
}

OrdersPage.propTypes = {
    orders: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        orders: state.orders
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(orderActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersPage);
