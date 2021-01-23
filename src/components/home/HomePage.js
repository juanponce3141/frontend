import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Heatwaves831</h1>
        <p>Nashville hot chicken</p>
        <Link to="/orders" className="btn btn-primary btn-lg">
            Start order
        </Link>
    </div>
);

export default HomePage;
