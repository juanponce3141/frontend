import React from "react";

const AboutPage = () => (
    <div>
        <h2>About</h2>
        <p>
            This app uses React, Redux, React Router, and many other helpful
            libraries.
        </p>
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
);

export default AboutPage;
