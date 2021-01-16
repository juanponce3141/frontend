import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/orders" activeStyle={activeStyle}>
                Order
            </NavLink>
            {" | "}
            <NavLink to="/booking" activeStyle={activeStyle}>
                Booking
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>

        </nav>
    );
};

export default Header;
