import React, { Component } from "react";
import api from "../../common/api";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            result: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({ result: "" });
        this.setState({ value: event.target.value });
    }
    handleClick() {
        let data = {};
        data.param = `{phoneNo:${this.state.value}}`;
        api.jqPost("http://isp.gzjunbo.net/integeration/getPackages", data, res => {
            console.log(res);
            res.code === "0" ? this.setState({ result: "是移动号码" }) : this.setState({ result: "非移动号码" });
        });
    }
    clickLogo(){
        api.vkcPost("supermarketloan/homepage/allviews", { param: {} }, res => {
            console.log(res);
        });
    }
    render() {
        return (
            <div className="mg20">
                <img src={require("../../common/img/logo.svg")} alt="logo" onClick={this.clickLogo}/>
                <h1 className="mg-b20">验证是否为移动号码</h1>
                <input type="tel" maxLength="11" value={this.state.value} onChange={this.handleChange} />
                <h3 className="mg-t20 mg-b20">
                    输入号码：{this.state.value}
                    <button className="mg-l15 pd5" onClick={this.handleClick}>
                        确定
                    </button>
                </h3>
                <p>验证结果：{this.state.result}</p>
            </div>
        );
    }
}
export default Home;
