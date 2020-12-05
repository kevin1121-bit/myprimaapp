import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./../App";
import Barberias from "./barberias";
import Barber from "../user/barber";

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/barberias" component={Barberias}/>
        <Route path="/barber" component={Barber}/>
    </Switch>
    </BrowserRouter>
)

export default Router;