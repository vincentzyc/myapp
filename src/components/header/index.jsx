import React, { Component } from "react";

const back = () => {
    window.history.back();
};
class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}

    render() {
        return (
            <header className="header_fixed">
                <img src={require("../../img/back.png")} alt="back" className="backicon" onClick={back}/>
                <h3 className="cfff">React</h3>
            </header>
        );
    }
}

export default Header;
