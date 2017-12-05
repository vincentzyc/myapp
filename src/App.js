import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/index";
import Main from "./components/main/index";
import Footer from "./components/footer/index";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
