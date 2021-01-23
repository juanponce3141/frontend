import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import OrdersPage from "./orders/OrdersPage";
import BookingPage from "./orders/BookingPage";
import SelectingtimePage from "./orders/SelectingtimePage";
import AdminPage from "./admin/AdminPage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/orders" component={OrdersPage} />
                <Route path="/booking" component={BookingPage} />
                <Route path="/selectingtime" component={SelectingtimePage} />
                <Route path="/admin" component={AdminPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
