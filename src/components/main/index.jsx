import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/index";
import Roster from "./roster/index";
import Todolist from "./todolist/todolist";

const pd50={
    padding:'50px 0'
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}

    render() {
        return (
            <div className="container" style={pd50}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/roster" component={Roster} />
                    <Route path="/todolist" component={Todolist} />
                </Switch>
            </div>
        );
    }
}

export default Header;
