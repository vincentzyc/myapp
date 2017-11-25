import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Animation from "./components/animation-router";
import AnimationV1 from "./components/animation-router-v1";
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
        main: () => <AnimationV1 />
    }
];

const tab_fixed = {
    width: "100%",
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
            <div>
                <TransitionGroup className="todo-list">
                    {routes.map((route, index) => (
                        <CSSTransition timeout={800} classNames="fade" key={index}>
                            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    </Router>
);

class App extends React.Component {
    render() {
        return <SidebarExample />;
    }
}

export default App;
