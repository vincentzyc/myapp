import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

// const Fade = ({ children, ...props }) => (
//     <CSSTransition {...props} timeout={500} classNames="fade">
//         {children}
//     </CSSTransition>
// );
//   const Fade = ({ in: inProp }) => (
//     <Transition in={inProp} timeout={duration}>
//       {(state) => (
//         <div style={{
//           ...defaultStyle,
//           ...transitionStyles[state]
//         }}>
//           I'm A fade Transition!
//         </div>
//       )}
//     </Transition>
//   );

const Fade = ({ children, ...props }) => (
    <CSSTransition {...props} timeout={{ enter: 500, exit: 800 }} classNames="fade">
        {children}
    </CSSTransition>
);

const Testdiv = () => (
    <div className="greeting">
        <h2>Hello world</h2>
    </div>
);

class FadeInAndOut extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { show: false };
        // setInterval(() => {
        //     this.setState({ show: !this.state.show });
        // }, 2000);
    }
    handleToggle() {
        this.setState({ show: !this.state.show });
    }
    render() {
        return (
            <div>
                <ul className="mg20" onClick={() => this.handleToggle()}>
                    testtesttest
                    {/* <NavLink to="/10/90/50">Red</NavLink>
                    <NavLink to="/120/100/40">Green</NavLink>
                    <NavLink to="/200/100/40">Blue</NavLink>
                    <NavLink to="/310/100/50">Pink</NavLink> */}
                </ul>
                <Fade in={this.state.show}>
                    <Router>
                        <div>
                            <Link to="/test">
                                <Testdiv />
                            </Link>
                            <Route path="/test" component={Testdiv} />
                        </div>
                    </Router>
                </Fade>
            </div>
        );
    }
}

export default FadeInAndOut;
