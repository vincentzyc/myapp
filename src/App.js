import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./router/router";
import Header from "./components/header";
import Footer from "./components/footer";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <RouteConfig />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
