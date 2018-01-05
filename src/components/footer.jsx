import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { TabBar } from "antd-mobile";

// const active = {
//     background: "#db403f",
//     color: "#fff"
// };
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.location.pathname
        };
    }
    changeTab(link) {
        if(this.state.selectedTab === link) return;
        this.setState({
            selectedTab: link
        });
        this.props.history.push(link);
    }
    render() {
        const hidden = this.props.location.pathname.split("/").length>2;
        return (
            <footer className="bottom_fixed" style={hidden?{display:"none"}:{display:"block"}}>
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
                    <TabBar.Item
                        title="Home"
                        key="Home"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "/"}
                        badge={1}
                        onPress={()=>{this.changeTab("/")}}
                        data-seed="logId"
                    />
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        title="Roster"
                        key="Roster"
                        badge={"new"}
                        selected={this.state.selectedTab === "/roster"}
                        onPress={()=>{this.changeTab("/roster")}}
                        data-seed="logId1"
                    />
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        title="Todolist"
                        key="Todolist"
                        dot
                        selected={this.state.selectedTab === "/todolist"}
                        onPress={()=>{this.changeTab("/todolist")}}
                    />
                    <TabBar.Item
                        icon={{ uri: "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg" }}
                        selectedIcon={{ uri: "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg" }}
                        title="Me"
                        key="Me"
                        selected={this.state.selectedTab === "/me"}
                        onPress={()=>{this.changeTab("/me")}}
                    />
                </TabBar>
            </footer>
        );
    }
}

export default Footer;
