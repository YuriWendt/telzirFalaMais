import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/home/Home.js";
import Help from "./pages/help/Help.js";
import Gastos from "./pages/gastos/Gastos.js";

const Routes = () => (

    <BrowserRouter>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/gastos" component={Gastos} />
        </Switch>

    </BrowserRouter>

);

export default Routes;