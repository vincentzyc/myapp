import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Animation from "./components/animation-router";
import Logo from "./img/logo.svg";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <img src={Logo} alt="logo" />
    },
    {
        path: "/animation",
        main: () => <Animation />
    },
    {
        path: "/shoelaces",
        main: () => <h2>Shoelaces</h2>
    }
];

const tab_fixed = {
    width:'100%',
    position: "fixed",
    left: "0",
    bottom: "0"
};
const SidebarExample = () => (
    <Router>
        <div>
            <ul className="flex bg999 text-center" style={tab_fixed}>
                <li className="flex-auto pd20">
                    <Link to="/">Home</Link>
                </li>
                <li className="flex-auto pd20">
                    <Link to="/Animation">Animation</Link>
                </li>
                <li className="flex-auto pd20">
                    <Link to="/shoelaces">Shoelaces</Link>
                </li>
            </ul>
            <div>{routes.map((route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.main} />)}</div>
        </div>
    </Router>
);

class App extends React.Component {
    render() {
        return <SidebarExample />;
    }
}

export default App;
