import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/main/home";
import Roster from "./components/main/roster";
import Todolist from "./components/main/todolist/todolist";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="pd50">
                    <Route path="/" component={Header} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/roster" component={Roster} />
                        <Route path="/todolist" component={Todolist} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
