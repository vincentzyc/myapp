import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from '../components/main/home';
// const Home = (location, cb) => {
//     require.ensure([],require => {
//             cb(null, require("../components/main/home").default);
//         },"chooseProducts");
// };
const Roster = (location, cb) => {
    require.ensure([],require => {
            cb(null, require("../components/main/roster").default);
        },"chooseProducts");
};
const Todolist = (location, cb) => {
    require.ensure([],require => {
            cb(null, require("../components/main/todolist/todolist").default);
        },"chooseProducts");
};

class RouteConfig extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/roster" getComponent={Roster} />
                <Route path="/todolist" getComponent={Todolist} />
            </Switch>
        );
    }
}

export default RouteConfig;
