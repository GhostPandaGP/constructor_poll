import React, { Component} from "react";
import "./style.css";

class Input extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        return (
            <div>
                <div><label htmlFor="label1">{this.props.title}</label></div>
                <div><small><label htmlFor="label2">{this.props.subtitle}</label></small></div>
                <div><input id={"label1"} type="text" placeholder={this.props.placeholder}/></div>
            </div>
        )
    }
}

export default Input